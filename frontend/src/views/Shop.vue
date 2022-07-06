<template>
  <div>
    <div id="content " >
      <div class="container">
      <div class="row row-cols-4">
        <div class="col"  id="blocEcriture"  v-for="cat in this.lst_cat" v-bind="cat.idCategorie">
          <BlocCategorie>
            <router-link class="nav-link active" aria-current="page" to="/produitEcriture">{{cat.NomCategorie}}</router-link>
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
    this.lst_cat.axios
    axios.get("http://localhost:3000/allcategories")
        .then(result => {
              console.log(this.lst_cat);
              this.lst_cat = result.data;
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
  
  }


</style>