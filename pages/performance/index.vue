<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col
          v-for="performanceTest in performanceTests"
          :key="performanceTest.uuid"
          cols="12"
        >
          <v-card>
            <v-card-title class="headlines" v-text="performanceTest.uuid" />
            <v-card-text>
              Uuid: {{ performanceTest.uuid }}
              <br />
              <div
                :class="{
                  inactivePerformanceTest:
                    performanceTest.status != 'running' &&
                    performanceTest.status != 'done',
                }"
              >
                Status: {{ performanceTest.status }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                rounded
                text
                @click="performanceDetails(performanceTest.uuid)"
                >Details</v-btn
              >
            </v-card-actions>
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
      performanceTests: [],
    };
  },
  mounted() {
    this.$axios.get("api/v1/performance").then((res) => {
      this.performanceTests = res.data.performance_tests;
    });
  },
  methods: {
    performanceDetails(uuid) {
      this.$router.push(`/performance/${uuid}`);
    },
  },
};
</script>

<style>
.inactivePerformanceTest {
  color: lightcoral;
}
</style>
