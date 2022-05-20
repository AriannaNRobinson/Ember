import './index.css'
import dragon1 from '../../images/dragon5.jpg'

const WelcomePage = () => {
    return (
        <div>
            <h1>Welcome to Ember!</h1>
            <p className='welcome-p'>A dragon-themed social media site</p>
            <img src={dragon1} alt='dragon1'></img>
        </div>
    )
}

export default WelcomePage;
