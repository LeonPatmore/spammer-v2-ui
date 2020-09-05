<template>
  <v-container>
    <v-row dense>
      <h1>Performance Test Details</h1>
    </v-row>
    <v-row dense>
      {{ this.$route.params.id }}
    </v-row>
    <br />
    <v-row dense>
      <h2>Status: {{ status }}</h2>
    </v-row>
    <br />
    <v-row dense>
      <h2>Clients</h2>
    </v-row>
    <v-row dense>
      <v-list>
        <v-list-item v-for="client in clients" :key="client">
          <v-list-item-content>
            <v-list-item-title v-text="client" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-col cols="12">
        <v-btn rounded text @click="goToClients()">Details</v-btn>
      </v-col>
    </v-row>
    <div v-if="status == 'done'">
      <h2>Results</h2>
      {{ performanceTest.result }}
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      status: null,
      clients: [],
      performanceTest: null,
    };
  },
  //   watch: {
  //     $route(to, from) {},
  //   },
  mounted() {
    const performanceTestUuid = this.$route.params.id;
    return this.$axios
      .get(`api/v1/performance/${performanceTestUuid}`)
      .then((res) => {
        const performanceTest = res.data;
        this.status = performanceTest.status;
        this.performanceTest = performanceTest;
        this.clients = performanceTest.followers.map(
          (follower) => follower.uuid
        );
      });
  },
  methods: {
    goToClients() {
      this.$router.push("/clients");
    },
  },
};
</script>

<style></style>
