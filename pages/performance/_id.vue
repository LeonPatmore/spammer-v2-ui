<template>
  <div>{{ performanceTest }}</div>
</template>

<script>
export default {
  data() {
    return {
      performanceTest: null,
    };
  },
  //   watch: {
  //     $route(to, from) {},
  //   },
  mounted() {
    const performanceTestUuid = this.$route.params.id;
    return this.$axios
      .get(`api/v1/performance/${performanceTestUuid}`)
      .then((res) => {
        this.performanceTest = res.data;
      });
  },
};
</script>

<style></style>
