import React from "react";
import { connect } from "react-redux";
import authOperations from "../../services/fetchAuth";
import authSelectors from "../../redux/auth/authSelectors";

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className="userMenu">
      <p>Welcome, {name} !!!</p>
      <button type="submit" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateTorops = (state) => ({
  name: authSelectors.getUserName(state),
});

export default connect(mapStateTorops, {
  onLogout: authOperations.logout,
})(UserMenu);
