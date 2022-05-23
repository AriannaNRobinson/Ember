
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import ChantFormModal from "../ChantFormModal";


const LeftSideBar = () => {
    // const dispatch = useDispatch()
    const userObj = useSelector(state => state.session.user)
    // const [clickedTab, setClickedTab] = useState(false)
    // working on   onClick={setClickedTab(!clickedTab)} id={clickedTab ? 'clicked' : 'not-clicked'}

    // const clickedTab = () => {
    //     if (window.location.pathname === 'explore-wilds') {
    //         const ele = document.getElementById('explore-wilds')
    //         ele.classList.add('clicked')
    //     }
    // }

    return (
        <div>
            <div className='menu highest-ele'>
                <div className='menu-item'>
                    <NavLink to='/the-village' exact={true}>
                        <i className='fa-solid fa-tents icon2'></i>
                        <p>The Village</p>
                    </NavLink>
                </div>
                <div className='menu-item'>
                    <NavLink to='/explore-wilds' exact={true}>
                        <i className='fa-solid fa-tree icon2'></i>
                        <p>Explore Wilds</p>
                    </NavLink>
                </div>
                <div className='menu-item'>
                    <NavLink to='/messenger-hawk' exact={true}>
                        <i className='fa-solid fa-scroll icon2'></i>
                        <p>Messenger Hawk</p>
                    </NavLink>
                </div>
                <div className='menu-item'>
                    <NavLink to={`/users/${userObj?.id}`} exact={true}>
                        <i className='fa-solid fa-dungeon icon2'></i>
                        <p>My Cave</p>
                    </NavLink>
                </div>
            </div>
            <div>
                <ChantFormModal />
            </div>
            <div className="current-user">
                <NavLink to={`/users/${userObj?.id}`}>@{userObj?.username}</NavLink>
            </div>
        </div>
    )
}

export default LeftSideBar;
