export const state = () => ({
  clients: [],
  performanceTests: [],
});

export const mutations = {
  setClients(state, { clients }) {
    state.clients = clients;
  },
  setPerformanceTests(state, { performanceTests }) {
    state.performanceTests = performanceTests;
  },
};

export const getters = {
  getClients(state) {
    return state.clients;
  },
  getPerformanceTests(state) {
    return state.performanceTests;
  },
};

// export const actions = {
//   async nuxtServerInit({ commit }) {
//     // On init.
//   },
// };
