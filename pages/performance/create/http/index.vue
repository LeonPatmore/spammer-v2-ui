<template>
  <div>
    <v-container>
      <h1>HTTP</h1>
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="runtime" label="Runtime" required />
        <v-text-field label="RPS" required />
        <v-text-field label="URL" required />
        <v-text-field label="Method" required />
        <v-btn small rounded @click="startTest">Start</v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      runtime: 0,
    };
  },
  methods: {
    startTest() {
      const data = `module.exports = {
        runtimeSeconds: ${this.runtime},
        rps: 5,
        interface: 'http',
        method: 'post',
        url: 'http://localhost:5435/123'
      }`;
      return this.$axios
        .post("api/v1/performance", data, {
          headers: {
            "Content-Type": "application/javascript",
          },
        })
        .then(() => {
          this.$router.push("/performance");
        });
    },
  },
};
</script>

<style></style>
