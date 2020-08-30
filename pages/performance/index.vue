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
              Status: {{ performanceTest.status }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["performanceTests"]),
};
</script>

<style></style>
