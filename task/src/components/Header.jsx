import { NavLink } from "react-router-dom";
// import Logout from "./Logout";
const Header = () => {  
    return (
        <>
          <h1 >Task Management</h1>
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
     
    </div>
        </>
    )
}
export default Header;