import axios from "axios";

export const state = () => ({
  clients: [],
});

export const mutations = {
  setClients(state, { clients }) {
    state.clients = clients;
  },
};

export const getters = {
  getClients(state) {
    return state.clients;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const spammerApiHost = process.env.SPAMMER_API_HOST || "localhost";
    const spammerApiPort = process.env.SPAMMER_API_PORT || "5435";
    return axios
      .get(`http://${spammerApiHost}:${spammerApiPort}/v1/clients`)
      .then((res) => {
        commit("setClients", { clients: res.data.clients });
      });
  },
};
