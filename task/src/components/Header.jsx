import { NavLink } from "react-router-dom";
import Logout from "./Logout";
const Header = () => {
  return (
    <div className="header">
      <div className="title">Task Management</div>

      <div className="nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "link")}
        >
          Home
        </NavLink>
        &nbsp;&nbsp;
        <NavLink
          to="/create"
          className={({ isActive }) => (isActive ? "active" : "link")}
        >
          Create
        </NavLink>
        <div className="logoutbutton"><Logout /></div>
      </div>
    </div>
  );
};
export default Header;
