import LeftSideBar from "../LeftSideBar"
import UsersList from "../Users/UsersList"
import SuggestedUser from '../SuggestedMembers'
import './index.css'
import dragon2 from '../../images/dragoneye1.jpg'
import { useHistory } from "react-router-dom"

const FeatureComingSoon = () => {

  const history = useHistory()

  const explore = (e) => {
    e.preventDefault()
    history.push('/explore-wilds')
  }

  return (
    <div className="page-container">

      <LeftSideBar />

      <div className="main-content-container">
        <div className="menu highest-ele create-chant-box">
          <div className='user1' id='feature-coming'>
            <h2>Keep an <em>eye</em> out!</h2>
            <h2>This feature will be arriving soon!</h2>
            <img id='feature-img' src={dragon2} alt='dragon2'></img>
            <h2>In the meantime...</h2>
            <h2>Explore the wilds!
              <button onClick={explore} className="back-explore">Explore!</button>
              </h2>
          </div>
          
        </div>

        {/* FEATURE COMING SOON PAGE */}

      </div>

      <SuggestedUser />

    </div>
  )
}

export default FeatureComingSoon
