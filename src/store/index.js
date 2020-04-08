import Vue from 'vue';
import Vuex from 'vuex';

import robotModule from './modules/robot';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  modules: {
    robots: robotModule,
    users: usersModule,
  },
  getters: {
  },
});
