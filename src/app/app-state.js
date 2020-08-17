import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: () => ({
        items: {},
    }),
    actions: {
        fetchClients({ commit }) {
            commit('getClients', { clients: [{ uuid: 'hi' }] });
        },
    },
    mutations: {
        getClients(state, { clients }) {
            Vue.set(state.clients, clients);
        },
    },
});
