<template>
<div>
  <TitrePanier/>
  <ItemPanier/>
</div>
</template>

<script>
import TitrePanier from "@/components/TitrePanier";
import ItemPanier from "@/components/ItemPanier";
export default {
  name: "BlocPanier",
  components: {ItemPanier, TitrePanier}
}
</script>

<style scoped>

</style>