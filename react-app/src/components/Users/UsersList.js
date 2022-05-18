import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  // console.log(users)
  const userComponents = users.map((user) => {
    return (
      <div className='members' key={user.id}>
        <NavLink to={`/users/${user.id}`} id='all'>@{user.username}</NavLink>
      </div>
    );
  });

  return (
    <>
      {/* <h1>User List: </h1> */}
      <div id='all-members'>{userComponents}</div>
    </>
  );
}

export default UsersList;
