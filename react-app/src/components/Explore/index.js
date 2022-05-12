import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChant } from "../../store/chants";
import LeftSideBar from "../LeftSideBar";
import UsersList from "../UsersList";
import './index.css'

const Explore = () => {
    const dispatch = useDispatch()
    const chantsObj = useSelector(state => state.chants)
    const chants = Object.values(chantsObj)
    console.log(chants)

    useEffect(() => {
        dispatch(getChant())
    }, [dispatch])

    return (
        <div className="page-container">
            <LeftSideBar />
            <div className="main-content-container">
                <div className="menu highest-ele create-chant-box">

                    WRITE NEW CHANT WILL GO HERE

                </div>
                <div className="menu feed">

                    {chants.reverse().map(chant => (
                        <div key={chant.id}>
                            <div>{chant?.user_id}</div>
                            <div>{chant?.content}</div>
                            {/* <div>{chant?.remarks}</div> */}
                            <div>{chant?.created_at}</div>
                            <div className='divider'></div>
                        </div>
                    ))}

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
