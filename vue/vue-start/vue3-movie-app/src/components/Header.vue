<template>
  <header>
    <Logo></Logo>
    <div class="nav nav-pills">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <RouterLink class="nav-link" :to="nav.href" active-class="active">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from './Logo';
  export default {
    name: 'Header',
    data() {
      return {
        navigations: [
          {
            name: 'Search',
            href: '/',
          },
          {
            name: 'Movie',
            href: '/movie/1',
          },
          {
            name: 'About',
            href: '/about',
          },
        ],
      };
    },
    components: {
      Logo,
    },
  };
</script>

<style lang="scss" scoped>
  header {
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    .logo {
      margin-right: 40px;
    }
  }
</style>
