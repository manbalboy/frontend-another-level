<template>
  <h1>Movie</h1>
</template>

<script>
  export default {
    name: 'Movie',

    created() {
      this.$store.dispatch('movie/searchMovieWithId', {
        id: this.$route.params.id,
      });
    },
  };
</script>

<style scoped></style>
