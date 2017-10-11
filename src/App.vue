<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import * as Vue from 'vue';
export default Vue.extend({
  name: 'app'
});
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  height: 100%;
  width: 100%;
}
</style>
