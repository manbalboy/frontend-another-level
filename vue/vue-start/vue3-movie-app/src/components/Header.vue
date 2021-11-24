<template>
  <header>
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
  };
</script>

<style scoped></style>
