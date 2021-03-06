import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../redux/auth/authSelectors";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(PrivateRoute);
