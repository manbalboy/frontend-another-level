<template>
  <header>
    <Logo></Logo>
    <div class="nav nav-pills">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <RouterLink
          class="nav-link"
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path) }"
        >
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
            href: '/movie/tt4520988',
            path: /^\/movie/,
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

    methods: {
      isMatch(path) {
        if (!path) return false;
        return path.test(this.$route.fullPath);
      },
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
