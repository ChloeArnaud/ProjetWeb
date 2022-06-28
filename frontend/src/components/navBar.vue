<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <div class="logo-image">
          <img src="../assets/Logo_de_cafe_minimaliste_creme_verte__1_-removebg-preview.png" class="img-fluid">
        </div>
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">

          <!-- Accueil -->
          <li class="nav-item active withoutIcon">
            <a class="nav-link" href="#">Accueil <span class="sr-only"></span></a>
          </li>
          <!-- Shop -->
          <li class="nav-item dropdown withoutIcon">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Shop
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Ecriture</a>
              <a class="dropdown-item" href="#">Cahiers, carnets, feuilles</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Agenda</a>
              <a class="dropdown-item" href="#">Accesoires de bureau</a>
              <a class="dropdown-item" href="#">Adhésifs</a>
              <a class="dropdown-item" href="#">Peinture</a>
            </div>
          </li>
          <!-- About -->
          <li class="nav-item withoutIcon">
            <a class="nav-link" href="#">About</a>
          </li>
          <!-- Contact -->
          <li class="nav-item withoutIcon">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <!-- Login / Compte -->
          <li class="nav-item withIcon">
            <a class="nav-link fa fa-fw fa-user" href="#"></a>
          </li>
          <!-- Panier -->
          <li class="nav-item withIcon">
            <a class="nav-link fa fa-shopping-cart" href="#"></a>
          </li>


          <!-- <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
          </li> -->
        </ul>

        <!-- Search button
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> -->
      </div>
    </nav>
  </header>

</template>

<script>
export default {
  name: "navBar"
}
</script>

<style scoped>

.navbar{
  margin: 42px;
}

.navbar img {
  display: block;
  width: 90px;
  height: 90px;
  margin: auto;
}
.navbar-brand {
  transform: translateX(-50%);
  left: 50%;
  width: 150px;
  height: 100px;
  position: absolute;
  align-items: center;
}
.withIcon{
  padding-right: 0rem;
  padding-left: 0rem;
  width:30px;
  height: 50px;
}

.withoutIcon{
  padding-right: 7rem;
  padding-left: 7rem;

}

</style>