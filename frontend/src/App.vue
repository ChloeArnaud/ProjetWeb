<template>
  <div id="app">
    <navBar/>
    <home-view/>
    <router-view/>
  </div>
</template>

<script>

import navBar from '@/components/navBar.vue'
import HomeView from "@/views/HomeView";

export default {
  name: "App",
  components:{
    HomeView,
    navBar
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
