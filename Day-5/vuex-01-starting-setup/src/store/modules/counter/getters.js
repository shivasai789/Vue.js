export default {
  finalCounter(state) {
    return state.counter;
  },
  normalizeCounter(state) {
    const counter = state.counter;
    if (counter < 0) {
      return 0;
    } else if (counter > 100) {
      return 100;
    }
    return counter;
  },
};
