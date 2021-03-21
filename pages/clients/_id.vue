<template>
  <div v-if="thisClient == null">
    <v-container>
      There is no client with this id {{ thisClientId }} !
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-container>
        <h1>{{ thisClient.uuid }}</h1>

        <div>Available: {{ thisClient.available }}</div>
        <div>Status: {{ thisClient.status }}</div>
        <div>Last updated: {{ thisClient.lastUpdate }}</div>
        <div>Jobs ran: {{ totalJobs }}</div>
      </v-container>
      <v-divider />
      <v-container>
        <input
          v-model="performanceUuidFilter"
          placeholder="filter by performance uuid"
          width="100%"
        />
        <v-row dense>
          <v-col
            v-for="job in filteredJobsByPerformanceUuid"
            :key="`${job.uuid} - ${job.type}`"
            cols="12"
          >
            <v-card :rounded="true">
              <v-card-title
                class="headlines"
                v-text="`${job.uuid} - ${job.type}`"
              />
              <v-card-text
                v-if="
                  job.type == 'peformance_plan' || job.type == 'performance_run'
                "
              >
                Performance UUID: {{ job.config.performanceUuid }}
                <div v-if="job.type == 'peformance_plan'">
                  Config: {{ job.config.config }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { clientGetter } from "../../services/spammer-leader-ws";
export default {
  data() {
    return {
      clientGetter: clientGetter,
      thisClient: null,
      thisClientId: this.$route.params.id,
      totalJobs: null,
      performanceUuidFilter: null,
    };
  },
  computed: {
    filteredJobsByPerformanceUuid() {
      if (!this.performanceUuidFilter) return this.thisClient.jobs;
      return this.thisClient.jobs.filter(
        (job) => job.config.performanceUuid == this.performanceUuidFilter
      );
    },
  },
  watch: {
    clientGetter: {
      handler(n) {
        this.getThisClient(n.clients);
      },
      deep: true,
    },
  },
  mounted() {
    this.getThisClient(this.clientGetter.clients);
  },
  methods: {
    getThisClient(clients) {
      clients.forEach((client) => {
        if (client.uuid == this.thisClientId) {
          this.thisClient = client;
          this.totalJobs = (client.jobs || []).length;
        }
      });
    },
  },
};
</script>

<style></style>
