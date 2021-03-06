import React, { Component, Suspense } from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Loader from "react-loader-spinner";
import "../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import routes from "../routes";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import AuthMenu from "./AuthMenu";
import UserMenu from "../components/UserMenu/UserMenu";

import authSelectors from "../redux/auth/authSelectors";
import authOperations from "../services/fetchAuth";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    const { isLogin, isUserLoading } = this.props;

    return (
      <>
        <BrowserRouter>
          <div className="Navigation">
            {isLogin && (
              <NavLink to="/contacts" className="Contacts_title">
                Contacts
              </NavLink>
            )}
            <div></div>
            <div>{isLogin && !isUserLoading ? <UserMenu /> : <AuthMenu />}</div>
          </div>
          <Suspense
            fallback={
              <Loader
                type="ThreeDots"
                color="#f5f505"
                height={50}
                width={100}
                timeout={3000} //3 secs
              />
            }
          >
            <Switch>
              {routes.map((route) => {
                return route.private ? (
                  <PrivateRoute key={route.path} {...route} />
                ) : (
                  <PublicRoute
                    key={route.path}
                    {...route}
                    restricted={route.restricted}
                  />
                );
              })}
            </Switch>
          </Suspense>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: authSelectors.isLogin(state),
  isUserLoading: authSelectors.isUserLoad(state),
});

export default connect(mapStateToProps, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);

// {"name":"qwer","email":"qwer@qwer.com","password":"qwertyuio"}"
