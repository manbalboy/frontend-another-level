<template>
  <h1 @click="increase">
    {{ count }}
  </h1>
  <div v-if="count > 4">
    <p>4보다 큽니다.</p>
  </div>

  <ul>
    <Fruit v-for="(fruit, index) in fruits" :key="index" :name="fruit" />
  </ul>
</template>

<script>
import Fruit from '~/components/Fruit';
export default {
  name: 'App',
  components: {
    Fruit,
  },
  data() {
    return {
      count: 0,
      fruits: ['Apple', 'Banana', 'Cherry'],
    };
  },
  methods: {
    increase() {
      this.count += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 20px;
  color: royalblue;
}

ul {
  li {
    font-size: 40px;
  }
}
</style>
