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
    <RouterLink to="/about" class="user">
      <img :src="image" :alt="about" />
    </RouterLink>
  </header>
</template>

<script>
  import Logo from './Logo';
  import { mapState } from 'vuex';
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
    computed: {
      ...mapState('about', ['image', 'name']),
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
    position: relative;
    .logo {
      margin-right: 40px;
    }
    .user {
      width: 40px;
      height: 40px;
      padding: 6px;
      border-radius: 50%;
      box-sizing: border-box;
      background-color: $gray-200;
      cursor: pointer;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 40px;
      margin: auto;
      transition: 0.4s;

      &:hover {
        background-color: darken($gray-200, 10%);
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-sizing: border-box;
      }
    }
    @include media-breakpoint-down(sm) {
      .nav {
        display: none;
      }
    }
  }
</style>
