import axios from "axios";

export const state = () => ({
  clients: [{ uuid: "asdasd" }],
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
    // const spammerApiHost = process.env.SPAMMER_API_HOST || "localhost";
    return axios.get(`http://localhost:5435/v1/clients`).then((res) => {
      commit("setClients", { clients: res.data.clients });
    });
  },
};
