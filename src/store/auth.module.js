export default {
  namespaced: true,
  state: {
    userId: null,
  },
  getters: {
    getUserDetails(state) {
      return state.userId;
    },
  },
  mutations: {
    setUserDetails: (state, data) => {
      state.userId = data;
    },
  },
  actions: {
    setUserDetailsFn({ commit }, payload) {
      commit("setUserDetails", payload);
    },
  },
};
