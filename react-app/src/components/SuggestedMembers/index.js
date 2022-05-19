import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './index.css'

const SuggestedUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('/api/users/');
        const responseData = await response.json();
        setUsers(responseData.users);
      }
      fetchData();
    }, []);

    const getRandomUser = (users) => {
        let n = 6
        let result = [n]
        let len = users?.length - 1
        let picked = [len]
        while (n--) {
            let randomNum = Math.floor(Math.random() * len)
            result[n] = users[randomNum in picked ? picked[randomNum] : randomNum]
            picked[randomNum] = --len in picked ? picked[len] : len
            // console.log(result)
        }
        return result
    }
  
    // console.log(users)
    const userComponents = getRandomUser(users)?.map((user, i) => {
      return (
        <div className='members' key={i}>
          <NavLink to={`/users/${user?.id}`}>
            @{user?.username !== undefined && user?.username}
            </NavLink>
        </div>
      );
    });
  
    return (
      <>
        {/* <h1>User List: </h1> */}
        <div className="menu highest-ele suggested">
        <p>Suggested</p>
        <div>{userComponents}</div>
      </div>
      </>
    );

}

export default SuggestedUsers
