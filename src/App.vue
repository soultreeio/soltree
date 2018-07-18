<template>
  <div id="app">
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue';

export default {
  name: 'home',
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
  @import 'assets/sass/app';
</style>
