import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChant } from "../../store/chants";
import ChantForm from "../ChantFormModal/ChantForm";
import LeftSideBar from "../LeftSideBar";
import UsersList from "../UsersList";
import './index.css'

const Explore = () => {
    const dispatch = useDispatch()
    const userObj = useSelector(state => state.session.user)
    const chantsObj = useSelector(state => state.chants)
    const chants = Object.values(chantsObj)

    const [toggleComment, setToggleComment] = useState('')
    console.log(chants)

    useEffect(() => {
        dispatch(getChant())
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
                    {chants.reverse().map(chant => (
                        <div key={chant.id}>
                            <div className="chant">{chant?.user_id}</div>
                            <div className="chant">{chant?.content}</div>
                            <div className="chant">
                                {chant?.created_at.split(" ")[0]}{" "}
                                {chant?.created_at.split(" ")[2]}{" "}
                                {chant?.created_at.split(" ")[1]},{" "}
                                {chant?.created_at.split(" ")[3]} at{" "}
                                {Number(
                                    chant?.created_at
                                        .split(" ")[4]
                                        .split(":")[0]
                                ) <= 12
                                    ? chant?.created_at
                                        .split(" ")[4]
                                        .split(":")[0]
                                    : Number(
                                        chant?.created_at
                                            .split(" ")[4]
                                            .split(":")[0]
                                    ) - 12}
                                :
                                {
                                    chant?.created_at
                                        .split(" ")[4]
                                        .split(":")[1]
                                }
                                {Number(
                                    chant?.created_at
                                        .split(" ")[4]
                                        .split(":")[0]
                                ) > 12 ? 'PM' : 'AM'}
                            </div>
                            <div className='chant-options-container'>
                                <div className="chant-options">
                                    <i onClick={() => setToggleComment(toggleComment ? '' : chant?.id)} className="fa-solid fa-comment icon3"></i>
                                    <div className='num-chants fa-solid'>{chant?.remarks?.length}</div>
                                </div>
                                <div>
                                    <i className="fa-solid fa-fire-flame-curved icon3"></i>
                                </div>
                            </div>
                            {toggleComment !== '' && +toggleComment === +chant?.id && chant?.remarks.map(remark => (
                                <div className='remark-container' key={remark.id}>
                                    <div className="remark-details-container">
                                        <div className="remark">{remark?.user_id}</div>
                                        <div className="remark" id='remark-created-at'>
                                            {remark?.created_at.split(" ")[0]}{" "}
                                            {remark?.created_at.split(" ")[2]}{" "}
                                            {remark?.created_at.split(" ")[1]},{" "}
                                            {remark?.created_at.split(" ")[3]} at{" "}
                                            {Number(
                                                remark?.created_at
                                                    .split(" ")[4]
                                                    .split(":")[0]
                                            ) <= 12
                                                ? remark?.created_at
                                                    .split(" ")[4]
                                                    .split(":")[0]
                                                : Number(
                                                    remark?.created_at
                                                        .split(" ")[4]
                                                        .split(":")[0]
                                                ) - 12}
                                            :
                                            {
                                                remark?.created_at
                                                    .split(" ")[4]
                                                    .split(":")[1]
                                            }
                                            {Number(
                                                remark?.created_at
                                                    .split(" ")[4]
                                                    .split(":")[0]
                                            ) > 12 ? 'PM' : 'AM'}
                                        </div>
                                    </div>
                                    <div className="remark">{remark?.content}</div>
                                </div>
                            ))}
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
