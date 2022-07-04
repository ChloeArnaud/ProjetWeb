<template>
  <div>
    <TitreCategorie id="titre"><slot>Peinture</slot></TitreCategorie>
  </div>
</template>

<script>
import TitreCategorie from "@/components/TitreCategorie";

export default {
  name: "ProduitPeintre",
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