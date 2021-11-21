<template>
  <li>{{ name }}</li>
</template>

<script>
export default {
  name: 'Fruit',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  font-size: 100px;
  color: red;
}
</style>
