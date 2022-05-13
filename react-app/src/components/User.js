import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getChant } from '../store/chants';
import ChantForm from './ChantFormModal/ChantForm';
import DeleteModal from './DeleteModal';
import EditChantFormModal from './EditChantFormModal';
import LeftSideBar from './LeftSideBar';
import UsersList from './UsersList';

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.session.user)
  const chantsObj = useSelector(state => state.chants)
  const chants = Object.values(chantsObj)

  const [toggleComment, setToggleComment] = useState('')

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  useEffect(() => {
    dispatch(getChant())
  }, [dispatch])

  if (!user) {
    return null;
  }

  const userChants = chants?.filter(userChant => userChant?.user_id === user?.id)
  


  return (
    // <ul className='highest-ele'>
    //   <li>
    //     <strong>User Id</strong> {userId}
    //   </li>
    //   <li>
    //     <strong>Username</strong> {user.username}
    //   </li>
    //   <li>
    //     <strong>Email</strong> {user.email}
    //   </li>
    // </ul>
    <div className="page-container">

      <LeftSideBar />

      <div className="main-content-container">
        <div className="menu highest-ele create-chant-box">
          {/* <ChantForm /> */}
          <div className='user1'>@{user.username}</div>
        </div>
        {/* ONLY CHANTS BY USER */}
      <div className="menu feed">
        {userChants?.reverse().map(chant => (
          <div className='chant-container' key={chant.id}>
            <div className='chant-details-container'>
              {/* need to change below to user NAME */}
              <div className="user1">{chant?.user_id}</div>
              <div className="chant" id='chant-created-at'>
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
            </div>

            <div className="chant">{chant?.content}</div>
            {chant?.user_id === currentUser?.id &&
              <div className='modify'>
                <div><EditChantFormModal chant={chant} /></div>
                <div><DeleteModal chant={chant} /></div>
              </div>
            }

            <div className='chant-options-container'>
              <div className="chant-options">
                <i onClick={() => setToggleComment(toggleComment ? '' : chant?.id)} className="fa-solid fa-comment icon4"></i>
                <div className='num-chants fa-solid'>{chant?.remarks?.length}</div>
              </div>
              <div>
                <i className="fa-solid fa-fire-flame-curved icon4"></i>
              </div>
            </div>
            {toggleComment !== '' && +toggleComment === +chant?.id && chant?.remarks.map(remark => (
              <div className='remark-container' key={remark.id}>
                <div className="remark-details-container">
                  {/* need to change below to user NAME */}
                  <div className="user2">{remark?.user_id}</div>
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
export default User;
