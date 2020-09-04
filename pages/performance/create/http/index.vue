<template>
  <div>
    <v-container>
      <h1>HTTP</h1>
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="runtime" label="Runtime" required />
        <v-text-field v-model="rps" label="RPS" required />
        <v-text-field v-model="url" label="URL" required />
        <v-select v-model="method" :items="methods"></v-select>
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
      rps: 0,
      url: "",
      method: "POST",
      methods: ["POST", "GET"],
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
