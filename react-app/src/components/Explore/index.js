import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChant } from "../../store/chants";
import { getRemark } from "../../store/remarks";
import ChantForm from "../ChantFormModal/ChantForm";
import DeleteModal from "../DeleteChantModal";
import EditChantFormModal from "../EditChantFormModal";
import LeftSideBar from "../LeftSideBar";
import UsersList from "../Users/UsersList";
import './index.css'
import SingleChant from "./SingleChant";

const Explore = () => {
    const dispatch = useDispatch()
    const userObj = useSelector(state => state.session.user)
    const chantsObj = useSelector(state => state.chants)
    const chants = Object.values(chantsObj)

    // const [toggleComment, setToggleComment] = useState('')
    console.log(chants)

    useEffect(() => {
        dispatch(getChant())
        // dispatch(getRemark())
    }, [dispatch])

    return (
        <div className="page-container">

            <LeftSideBar />

            <div className="main-content-container">

                <div className="menu highest-ele create-chant-box">
                    <ChantForm />
                </div>
                {/* ALL USERS FEED */}
                <div className="menu feed">
                    {chants.reverse().map(chant => {
                        return <SingleChant key={chant?.id} chant={chant} userObj={userObj} />
                    })}
                </div>

            </div>

            <div className="menu highest-ele suggested">
                <p>Suggested Members:</p>
                <UsersList />
            </div>

        </div>
    )
}

export default Explore;
