import axios from "axios";
import commitPerformanceTests from "./inits";

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

export const actions = {
  async nuxtServerInit({ commit }) {
    const spammerApiHost = process.env.SPAMMER_API_HOST || "localhost";
    const spammerApiPort = process.env.SPAMMER_API_PORT || "5435";

    const commitClients = axios
      .get(`http://${spammerApiHost}:${spammerApiPort}/v1/clients`)
      .then((res) => {
        commit("setClients", { clients: res.data.clients });
      });

    return Promise.all([commitClients, commitPerformanceTests(commit)]);
  },
};
