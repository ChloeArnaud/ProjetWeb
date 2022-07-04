<template>
  <li class="nav-item dropdown" @click="isOpen = !isOpen">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Shop
    </a>
    <transition name="fade" apear>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown" v-if="isOpen">
      <li>
        <router-link to="/categorie/produitEcriture">Ecriture</router-link>
      </li>
      <li>
        <router-link to="/categorie/produitCahier">Cahier</router-link>
      </li>
      <li>
        <router-link to="/categorie/produitAgenda">Agenda</router-link>
      </li>
      <li>
        <router-link to="/categorie/produitBureau">Bureau</router-link>
      </li>
      <li>
        <router-link to="/categorie/produitAdhesifs">Adhésifs</router-link>
      </li>
      <li>
        <router-link to="/categorie/produitPeinture">Peinture</router-link>
      </li>
    </ul>
    </transition>
  </li>


</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "categorie",
  props:['title'],
  data () {
    return {
      isOpen: false,
    }
  }
}
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@media(min-width: 992px){
  .navbar-expand-lg .navbar-collapse{
    width: 100%;
  }
}
</style>