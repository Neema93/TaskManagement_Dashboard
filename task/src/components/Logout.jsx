import { useDispatch } from "react-redux";
import { logout } from "../actions/authentication";
const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </>
  );
};
export default Logout;
