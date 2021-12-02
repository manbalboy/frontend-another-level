<template>
  <footer>
    <Logo />
    <a href="https://github.com/manbalboy" target="_blank">
      (c){{ new Date().getFullYear() }} MANBALBOY
    </a>
  </footer>
</template>

<script>
  import Logo from './Logo';

  export default {
    name: 'Footer',
    components: {
      Logo,
    },
  };
</script>

<style lang="scss" scoped>
  footer {
    padding: 70px;
    text-align: center;
    opacity: 0.3;
    .logo {
      display: block;
      margin-bottom: 4px;
    }
  }
</style>
