import LeftSideBar from "../LeftSideBar"
import UsersList from "../Users/UsersList"
import SuggestedUser from '../SuggestedMembers'

const FeatureComingSoon = () => {
  return (
    <div className="page-container">

      <LeftSideBar />

      <div className="main-content-container">
        <div className="menu highest-ele create-chant-box">
          <div className='user1'>
            <h2>Stay tuned!</h2>
            <h2>This feature will be arriving soon!</h2>
            <h2>In the meantime...</h2>
            <h2>Explore the wilds!</h2>
          </div>
        </div>

        {/* FEATURE COMING SOON PAGE */}

      </div>

      <SuggestedUser />

    </div>
  )
}

export default FeatureComingSoon
