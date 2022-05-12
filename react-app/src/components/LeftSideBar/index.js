import { useState } from "react";
import { NavLink } from "react-router-dom"

const LeftSideBar = () => {
    // const [clickedTab, setClickedTab] = useState(false)
    // working on onClick={setClickedTab(!clickedTab)} id={clickedTab ? 'clicked' : 'not-clicked'}
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
                    <NavLink to='/my-cave' exact={true}>
                        <i className='fa-solid fa-dungeon icon2'></i>
                        <p>My Cave</p>
                    </NavLink>
                </div>
            </div>
            <div>
                <button className='menu-item create-chant'>
                    <i className='fa-solid fa-feather-pointed icon2'></i>
                    <p>New Shout</p>
                </button>
            </div>
        </div>
    )
}

export default LeftSideBar;
