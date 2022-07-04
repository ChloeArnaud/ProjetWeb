<template>
  <div id="app">
    <navBar/>
    <HomeView/>
  </div>
</template>

<script>

import navBar from '@/components/navBar.vue'
import HomeView from '@/components/BlocAccueil'

export default {
  name: "App",
  components:{
    navBar, HomeView
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
