<template>
  <div>
    <h1>HTTP</h1>
    <h2>{{ result }}</h2>
    <v-form ref="form" lazy-validation>
      <v-text-field />
    </v-form>
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
};
</script>

<style></style>
