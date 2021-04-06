export const state = () => ({
  spammerHost: undefined,
});

export const mutations = {
  setSpammerHost(state, host) {
    console.log("Setting spammer host to " + host);
    state.spammerHost = host;
  },
};

export const getters = {
  spammerHost(state) {
    return state.spammerHost;
  },
};
