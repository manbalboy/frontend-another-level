<template>
  <Header></Header>
  <RouterView />
  <button class="btn btn-primary">Button</button>
</template>

<script>
  import Header from './components/Header';

  export default {
    components: {
      Header,
    },
  };
</script>

<style lang="scss">
  @import 'scss/main';
</style>
