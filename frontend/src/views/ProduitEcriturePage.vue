<template>
  <div>
    <h1>JE SUIS LA PAGE ECRITURE</h1>
    <TitreCategorie id="titre"><slot>Ecriture</slot></TitreCategorie>

  </div>
</template>

<script>

import TitreCategorie from '@/components/TitreCategorie.vue'

export default {
  name: "ProduitEcriture",
  components:{
    TitreCategorie
  }
}
</script>

<style scoped>

#titre{
  background-color: #EDAD9E;
}
</style>