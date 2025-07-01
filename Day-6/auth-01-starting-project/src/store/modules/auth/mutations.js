export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
    state.didLogout = false;
  },
  didLogout(state) {
    state.didLogout = true;
  },
};
