<template>
  <div>
    <TitreCategorie id="titre" :style="'background-color:'+cat.couleurCategorie">{{cat.NomCategorie}}</TitreCategorie>

  </div>
</template>

<script>

import TitreCategorie from '@/components/TitreCategorie.vue'
import axios from 'axios'



export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Shop",
  data: function(){
    return {
        cat : {},
    }
  },
  beforeCreate() {
    let id = this.$route.params.id;
    axios.get("http://127.0.0.1:3000/getcategoriebyid/"+id  ,function (req,res) {
       res.header("Access-Control-Allow-Origin", "*");})
        .then(result => {
              //console.log(this.lst_cat);
              //this.lst_cat = result.data;
              this.cat = result.data;
              console.log("CAT --> "+this.cat.NomCategorie);
        })
        .catch(error => console.log(error));
  },
  components:{
    TitreCategorie,
  }
}


</script>

<style scoped>
#titre{
  background-color: #E17F58;
}
</style>