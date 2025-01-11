import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import { getExpenses } from "../actions/expenses";
import Header from "../components/Header";
const PrivateRoute = (props) => {
  const { isAuthenticated } = props;
  useEffect(() => {
    if (isAuthenticated) {
    //   props.dispatch(getExpenses()); // Dispatch the action to fetch expenses
    } else {
    //   console.warn("User is not authenticated. Cannot fetch expenses.");
    }
  }, [isAuthenticated, props]);

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