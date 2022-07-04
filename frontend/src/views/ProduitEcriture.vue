<template>
  <div>
    <TitreCategorie id="titre"><slot>Ecriture</slot></TitreCategorie>
    <BlocProduit/>
  </div>
</template>

<script>

import TitreCategorie from '@/components/TitreCategorie.vue'
import BlocProduit from "@/components/BlocProduit";

export default {
  name: "ProduitEcriture",
  components:{
    BlocProduit,
    TitreCategorie
  }
}
</script>

<style scoped>

#titre{
  background-color: #EDAD9E;
}
</style>