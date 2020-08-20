import api from '../api';

export const getUsers = ({ commit }) =>
    api.getUsers()
        .then(response => commit('setUsers', response.data));

export const getClients = ({ commit }) => {
    commit('setClients', [{ 'uuid': 'hi' }])
}
