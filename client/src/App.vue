<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
#app {
  width: 100%;
  height: 100%;
}
</style>