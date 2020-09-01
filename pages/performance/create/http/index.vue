<template>
  <div>
    <v-container>
      <h1>HTTP</h1>
      <h2>{{ result }}</h2>
      <v-form ref="form" lazy-validation>
        <v-text-field label="Runtime" required />
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
    return { result: "one" };
  },
  mounted() {
    this.$axios.get("api").then((res) => {
      this.result = res.data;
    });
  },
  methods: {
    startTest() {
      alert("hey");
    },
  },
};
</script>

<style></style>
