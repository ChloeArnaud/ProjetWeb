<template>
  <div>
    <TitreCategorie id="titre"><slot>Adhésifs</slot></TitreCategorie>
  </div>
</template>

<script>

import TitreCategorie from '@/components/TitreCategorie.vue'

export default {
  name: "ProduitAdhesif",
  components:{
    TitreCategorie
  }
}
</script>

<style scoped>
#titre{
  background-color: #E17F58;
}
</style>