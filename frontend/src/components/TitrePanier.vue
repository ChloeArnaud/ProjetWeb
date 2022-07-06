<template>
<div>
  <h3 class="titre">Mon panier</h3>
  <ul id="example-1">
    <li v-for="item in items" :key="item.message">
      {{ item.message }}
    </li>
  </ul>
</div>
</template>

<script>
 export default {
   name: "TitrePanier",
   el: '#example-1',
   data: function () {
     return {
       items: [
         {message: 'Foo'},
         {message: 'Bar'}
       ]
     }
   },
   methods : {

   }
 }
</script>

<style scoped>
.titre{
  background-color: #A4CBC3;
  width: 100%;
  padding: 2%;
  margin: 2%;
  color: floralwhite;
}
</style>