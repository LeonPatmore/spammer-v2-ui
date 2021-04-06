<template>
  <div>{{ leaderGetter.leader.uuid }}</div>
</template>

<script>
import { createWebsocket } from "../services/spammer-leader-ws";
import { leaderGetter } from "../services/spammer-leader-store";
export default {
  name: "App",
  data: function () {
    return {
      leaderGetter,
    };
  },
  mounted() {
    if (typeof this.$store.getters.spammerHost == "undefined") {
      this.$prompt("Please insert the host of the spammer leader").then(
        (host) => {
          this.$store.commit("setSpammerHost", host);
          createWebsocket(host);
        }
      );
    }
  },
};
</script>

<style></style>
