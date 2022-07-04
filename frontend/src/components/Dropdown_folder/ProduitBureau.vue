<template>
  <div>
    <TitreCategorie id="titre"><slot>Accessoires de Bureau</slot></TitreCategorie>
  </div>
</template>

<script>
import TitreCategorie from "@/components/TitreCategorie";

export default {
  name: "ProduitBureau",
  components:{
    TitreCategorie
  }
}
</script>

<style scoped>
#titre{
  background-color: #599391;
}
</style>