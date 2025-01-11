import { NavLink } from "react-router-dom";
// import Logout from "./Logout";
const Header = () => {  
    return (
        <>
          <div >Task Management</div>
      <div >
        {/* <Logout /> */}
      </div>
 
    <div >
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
      &nbsp;&nbsp;
      <NavLink
        to="/help"
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        Help
      </NavLink>
    </div>
        </>
    )
}
export default Header;