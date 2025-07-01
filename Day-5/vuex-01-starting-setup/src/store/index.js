import { createStore } from 'vuex';
import counterModule from './modules/counter';
import rootMutations from './mutations';
import rootGetters from './getters';
import rootActions from './actions';

const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isAuthorized: false,
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions,
});

export default store;
