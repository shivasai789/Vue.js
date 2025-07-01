import counterMutations from './mutations';
import counterGetters from './getters';
import counterActions from './actions';

const counterModule = {
  namespaced: true,
  state() {
    return { counter: 0 };
  },
  mutations: counterMutations,
  getters: counterGetters,
  actions: counterActions,
};

export default counterModule;
