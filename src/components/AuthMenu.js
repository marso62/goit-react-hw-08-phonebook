import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import routes from "../routes";

import authSelectors from "../redux/auth/authSelectors";

const routePath = routes.map((route) => route.path);
const routeLabel = routes.map((route) => route.label);

const AuthMenu = () => (
  <>
    <ul className="Navigation_log-reg">
      <li>
        <NavLink
          to={routePath[0]}
          className="Navigation-link"
          activeClassName="Navigation-link-active"
        >
          {routeLabel[0]}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routePath[1]}
          className="Navigation-link"
          activeClassName="Navigation-link-active"
        >
          {routeLabel[1]}
        </NavLink>
      </li>
    </ul>
  </>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(AuthMenu);
