import LeftSideBar from "../LeftSideBar"
import UsersList from "../Users/UsersList"


const Village = () => {
    return (
        <div className="page-container">

            <LeftSideBar />

            <div className="main-content-container">

                {/* ALL USERS FOR NOW (FUTURE SHADOW ONLY FEED) */}
                <div className="menu highest-ele create-chant-box">
                    <h2>All Members:</h2>
                    <UsersList />
                </div>
                {/* <div className="menu feed">
                    <UsersList />
                </div> */}

            </div>

            <div className="menu highest-ele suggested">
                <p>Suggested Members:</p>
                <UsersList />
            </div>

        </div>
    )
}

export default Village
