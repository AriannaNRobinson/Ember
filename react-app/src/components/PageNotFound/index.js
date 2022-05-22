import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
    const userObj = useSelector(state => state.session.user)
    const history = useHistory()

    const handleBack = (e) => {
        e.preventDefault()
        if (userObj) {
            history.push('/explore-wilds')
        } else {
            history.push('/login')
        }
    }
    return (
        <div className="page-container">
            <div className="menu highest-ele" id='page-not-found-container'>
                <h2>Oops!</h2>
                <i className="fa-solid fa-face-frown"></i>
                <h2>Page not found...</h2>
                <button onClick={handleBack} className="back">BACK</button>
            </div>
        </div>
    )
}

export default PageNotFound;
