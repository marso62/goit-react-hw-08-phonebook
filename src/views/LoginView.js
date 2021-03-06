import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../services/fetchAuth";

const INITIAL_LOGIN = {
  email: "",
  password: "",
};

class LoginViews extends Component {
  state = INITIAL_LOGIN;

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onLogin } = this.props;
    onLogin({ ...this.state });
    this.setState({ ...INITIAL_LOGIN });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <h1 className="register_title">Login please</h1>
        <form className="form_register" onSubmit={this.handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default connect(null, { onLogin: authOperations.login })(LoginViews);
