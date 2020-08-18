import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStore() {
    return new Vuex.Store({
        state: () => ({
            clients: {},
        }),
        actions: {
            fetchClients({ commit }) {
                return new Promise.resolve([{ uuid: 'hi' }]).then(theClients => {
                    commit('setClients', { theClients });
                });
            },
        },
        mutations: {
            setClients(state, { theClients }) {
                Vue.set(state, 'clients', theClients);
            },
        },
    });
}
