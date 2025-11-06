import { NavLink } from "react-router-dom";
import Logout from "./Logout";
const Header = () => {
  return (
    <div className="header">
      <h1>Task Management</h1>

      <div>
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
        <Logout />
      </div>
    </div>
  );
};
export default Header;
