<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col v-for="client in clients" :key="client.uuid" cols="12">
          <v-card>
            <v-card-title class="headlines" v-text="client.uuid" />
            <v-card-text>
              Uuid: {{ client.uuid }}
              <br />
              Available: {{ client.available }}
              <br />
              Status: {{ client.status }}
              <br />
              Last Update: {{ client.lastUpdate }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [],
    };
  },
  methods: {
    async getClients() {
      return this.$axios.get("api/v1/clients").then((res) => {
        this.clients = res.data.clients;
      });
    },
  },
  mounted() {
    this.getClients();
    this.pollInterval = setInterval(this.getClients, 5000);
  },
};
</script>

<style></style>
