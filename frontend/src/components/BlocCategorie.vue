<template>
<div id="BlocCategorie">
  <div id="content">
    <div class="element"><slot></slot></div>
  </div>
</div>
</template>

<script>
export default {
  name: "BlocCategorie"
}
</script>

<style scoped>

  .element{
    margin: 100px;
  }
</style>