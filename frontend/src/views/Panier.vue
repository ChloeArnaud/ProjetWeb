<template>
<div>
  <BlocPanier/>
  <h1>Je suis le panier sur Panier.vue dans les views</h1>
</div>
</template>

<script>
import BlocPanier from "@/components/BlocPanier";

export default {
  name: "Panier",
  components:
      {
        BlocPanier,
      }
}
</script>

<style scoped>

</style>