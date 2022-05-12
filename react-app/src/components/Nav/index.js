import { useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
import './index.css'

const Nav = () => {
  const user = useSelector(state => state.session.user)
  console.log(user)
  return (
    <nav>
      <div className="fa-solid fa-dragon icon"></div>
      {user
        ? <div>
          <LogoutButton />
        </div>
        : <div>
          <LoginFormModal />
          <SignUpFormModal />
        </div>
      }
    </nav>
  );
}

export default Nav;
