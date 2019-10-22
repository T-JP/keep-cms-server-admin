export const cookies = {
  namespaced: true,
  state: {
    data: {}
  },
  getters: {
    dataMap(state) {
      return state.data;
    },
    get: state => key => state.data[key]
  },
  mutations: {
    set(state, data) {
      state.data = data;
    }
  },
  actions: {
    set({ commit }) {
      commit("set", { a: 1 });
    }
  }
};
