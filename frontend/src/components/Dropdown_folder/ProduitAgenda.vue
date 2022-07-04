<template>
  <div>
    <TitreCategorie id="titre"><slot>Agenda</slot></TitreCategorie>
  </div>
</template>

<script>
import TitreCategorie from "@/components/TitreCategorie";

export default {
  name: "ProduitAgenda",
  components:{
    TitreCategorie
  }
}
</script>

<style scoped>
#titre{
  background-color: #E5BB70;
}
</style>