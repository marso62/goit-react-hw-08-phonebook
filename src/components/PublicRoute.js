import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../redux/auth/authSelectors";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(PublicRoute);
