const isLogin = (state) => state.auth.token;
const isUserLoad = (state) => state.auth.loadingUser;
const getUserName = (state) => state.auth.user.name;

export default { isLogin, getUserName, isUserLoad };
