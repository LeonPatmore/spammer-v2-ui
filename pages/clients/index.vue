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
import axios from "axios";
export default {
  layout: "default",
  name: "Clients",
  async asyncData() {
    const spammerApiHost = process.env.SPAMMER_API_HOST || "localhost";
    const spammerApiPort = process.env.SPAMMER_API_PORT || "localhost";
    const clients = await axios.get(
      `http://${spammerApiHost}:${spammerApiPort}/v1/clients`
    );
    // const a = [{ uuid: JSON.stringify(clients.data.clients) }];
    // // console.log(clients);
    return { clients: clients.data.clients };
  },
};
</script>

<style></style>
