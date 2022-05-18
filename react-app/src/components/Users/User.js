import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getChant } from '../../store/chants';
import ChantForm from '../ChantFormModal/ChantForm';
import DeleteModal from '../DeleteChantModal';
import EditChantFormModal from '../EditChantFormModal';
import SingleChant from '../Explore/SingleChant';
import LeftSideBar from '../LeftSideBar';
import SuggestedUsers from '../SuggestedMembers';
import UsersList from './UsersList';
import './index.css'

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
          <div className='user1'>@{user.username}</div>
        </div>

        {/* ONLY CHANTS BY USER */}
        <div className="menu feed">
          {userChants?.reverse().map(chant => {
            return <SingleChant key={chant?.id} chant={chant} userObj={currentUser} />
          })}
        </div>
      </div>

        <SuggestedUsers />

    </div>
  )
}
export default User;
