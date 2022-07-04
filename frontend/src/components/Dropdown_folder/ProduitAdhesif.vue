<template>
  <div>
    <BlocCategorie id="blocEcriture"><slot><router-link class="nav-link active" aria-current="page" to="/produitEcriture">Ecriture</router-link></slot></BlocCategorie>
  </div>
</template>

<script>

import BlocCategorie from "@/components/BlocCategorie";

export default {
  name: "ProduitAdhesif",
  components:{
    BlocCategorie,
  }

}
</script>

<style scoped>
#blocEcriture{background-color: #EDAD9E; margin: 20px;}
</style>