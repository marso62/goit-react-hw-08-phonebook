import axios from "axios";
import authActions from "../redux/auth/authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  await axios
    .post("/users/signup", credentials)
    .then((response) => {
      console.log(response);
      token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch((error) => dispatch(authActions.registerError(error.message)));
};

const login = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());
  await axios
    .post("/users/login", credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch((error) => dispatch(authActions.loginError(error.message)));
};

const logout = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());
  await axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error.message)));
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  await axios
    .get("/users/current")
    .then(({ data }) => {
      dispatch(authActions.getCurrentUserSuccess(data));
    })
    .catch((error) => dispatch(authActions.getCurrentUserError(error.message)));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
