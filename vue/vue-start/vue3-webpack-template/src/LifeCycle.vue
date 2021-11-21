<template>
  <h1>{{ count }}</h1>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 2,
    };
  },
  created() {
    console.log('Created!');
  },
  mounted() {
    console.log('Mounted!');
  },
};
</script>

<style scoped></style>
