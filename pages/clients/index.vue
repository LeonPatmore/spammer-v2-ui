<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col v-for="client in clients" :key="client.uuid" cols="12">
          <v-card
            color="success"
            :rounded="true"
            :nuxt="true"
            :to="`/clients/${client.uuid}`"
          >
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
import { clientGetter } from "../../services/spammer-leader-ws";
export default {
  data() {
    return {
      clientGetter: clientGetter,
      clients: clientGetter.clients,
    };
  },
  watch: {
    clientGetter: {
      handler(n) {
        this.clients = n.clients;
      },
      deep: true,
    },
  },
};
</script>

<style></style>
