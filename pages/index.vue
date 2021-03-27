<template>
  <div>{{ leaderGetter.leader.uuid }}</div>
</template>

<script>
import { leaderGetter } from "../services/spammer-leader-ws";
export default {
  name: "App",
  data: function () {
    return {
      leaderGetter,
    };
  },
};
</script>

<style></style>
