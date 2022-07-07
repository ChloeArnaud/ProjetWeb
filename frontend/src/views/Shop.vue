<template>
  <div>
    <div id="content " >
      <div class="container">
      <div class="row row-cols-4">
        <div class="col" v-for="cat in this.lst_cat" id="blocBureau" :style="'background-color:'+cat.couleurCategorie" v-bind:key="cat.idCategorie">
           <!-- v-for="cat in this.lst_cat" -->
           <!-- {{cat.NomCategorie}} -->
          <BlocCategorie>
            <router-link  class="nav-link active" :style="'background-color:'+cat.couleurCategorie" aria-current="page" :to="'/produit/'+cat.idCategorie">{{cat.NomCategorie}}</router-link>
          </BlocCategorie>
       </div>
      </div>
      </div>

    </div>
  </div>
</template>

<script>


import BlocCategorie from "@/components/BlocCategorie";
import axios from 'axios'



export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Shop",
  data: function(){
    return {
        lst_cat : [],
    }
  },
  beforeMount() {
    //this.lst_cat.axios
    axios.get("http://127.0.0.1:3000/allcategories", function (req,res) {
       res.header("Access-Control-Allow-Origin", "*");})
        .then(result => {
              console.log(this.lst_cat);
              this.lst_cat = result.data;
              //this.cat = lst_cat[0];
              //console.log("CAT --> "+cat);
        })
        .catch(error => console.log(error));
  },
  components:{
    BlocCategorie,
  }
}


</script>

<style scoped>

#blocEcriture{background-color: #EDAD9E; margin: 20px;}
#blocCahier{background-color: #A4CBC3; margin: 20px;}
#blocAgenda{background-color: #E5BB70; margin: 20px;}
#blocBureau{background-color: #599391; margin: 20px ;}
#blocAdhesif{background-color: #E17F58; margin: 20px ;}
#blocPeinture{background-color: #EDAD9E; margin: 20px ;}

#content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  filter: drop-shadow(0.1rem 0.1rem 0.1rem #656565);
  align-items: center;
  justify-content: center;
  }
.row-cols-4 {
  width: 100%;
  justify-content: center;
}


</style>