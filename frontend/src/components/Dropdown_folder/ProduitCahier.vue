<template>
  <div>
    <TitreCategorie id="titre"><slot>Cahiers, carnets, feuilles</slot></TitreCategorie>
  </div>
</template>

<script>
import TitreCategorie from "@/components/TitreCategorie";

export default {
  name: "ProduitCahier",
  components:{
    TitreCategorie
  }
}
</script>

<style scoped>
#titre{
  background-color: #A4CBC3;
}
</style>