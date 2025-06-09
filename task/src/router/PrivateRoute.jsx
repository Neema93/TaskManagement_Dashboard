
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
const PrivateRoute = (props) => {
  return props.isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});
export default connect(mapStateToProps)(PrivateRoute);
