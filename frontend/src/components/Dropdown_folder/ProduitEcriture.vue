<template>
  <div>
    <TitreCategorie id="titre"><slot>Ecriture</slot></TitreCategorie>
    <BlocProduit/>
  </div>
</template>

<script>
import BlocProduit from "@/components/BlocProduit";
import TitreCategorie from "@/components/TitreCategorie";

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