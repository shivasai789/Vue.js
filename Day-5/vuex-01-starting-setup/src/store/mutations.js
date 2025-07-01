export default {
  login(state) {
    state.isAuthorized = true;
  },
  logout(state) {
    state.isAuthorized = false;
  },
};
