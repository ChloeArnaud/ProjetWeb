<template>
<div>
  <h3 class="titre"><slot></slot></h3>
</div>
</template>

<script>
export default {
  name: "TitreCategorie"
}
</script>

<style scoped>

.titre{
  width: 100%;
  padding: 2%;
  margin: 2%;
  color: floralwhite;
}
</style>