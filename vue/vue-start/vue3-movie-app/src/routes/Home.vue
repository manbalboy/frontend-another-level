<template>
  <Headline />
  <Search />
</template>

<script>
  import Headline from '~/components/Headline';
  import Search from '../components/Search';
  export default {
    name: 'Home',
    components: { Search, Headline },
  };
</script>

<style scoped></style>
