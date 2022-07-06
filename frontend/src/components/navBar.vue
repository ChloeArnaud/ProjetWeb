<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- left side-->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

        <li class="nav-item" style="margin-left: 30px">
          <!--<a class="nav-link active" aria-current="page" href="#">Accueil</a>-->
          <router-link class="nav-link active" aria-current="page" to="/">Accueil</router-link>
        </li>
        <!--<Categorie title="Shop"></Categorie>-->

        <li class="nav-item" style="margin-left: 30px">
          <!--<a class="nav-link active" aria-current="page" href="#">Accueil</a>-->
          <router-link class="nav-link active" aria-current="page" to="/categorie">Shop</router-link>
        </li>

      </ul>
    </div>

    <!-- left side-->
    <a class="navbar-brand" href="#">
      <img alt="Vue logo" src="../assets/Logo_de_cafe_minimaliste_creme_verte__1_-removebg-preview.png" width="100">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- right side -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="#">About</a>-->
          <router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
        </li>

        <li class="nav-item">
          <!--<a class="nav-link active" aria-current="page" href="#">Contact</a>-->
          <router-link class="nav-link active" aria-current="page" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa fa-user" aria-hidden="true"></i></a>
        </li>
        <li class="nav-item">
          <!--a class="nav-link" href="#"><i class="fa fa-shopping-cart"></i></a>-->
          <router-link class="nav-link active" aria-current="page" to="/panier"><i class="fa fa-shopping-cart"></i></router-link>
        </li>
      </ul>
    </div>
    <!-- right side -->
  </nav>
</template>

<script>
//import Categorie from '../components/Categorie'
import Categorie from "@/components/Categorie";
export default {
  name: "navBar",
  components: {
    Categorie
   // Categorie
  },
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

.navbar-brand{
  width: 100%;
}

.active{
  color: black;
}

@media(min-width: 992px){
  .navbar-expand-lg .navbar-collapse{
    width: 100%;
  }
}
</style>