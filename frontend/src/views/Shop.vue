<template>
  <div>
    <div id="content">
        <div class="row">
           <div class="col-3" id="blocEcriture">
              <BlocCategorie ><slot><router-link class="nav-link active" aria-current="page" to="/produitEcriture">Ecriture</router-link></slot></BlocCategorie>   
           </div>
          <div class="col-4" id="blocCahier">
              <BlocCategorie ><slot><router-link class="nav-link active" aria-current="page" to="/produitCahier">Cahiers, carnets, feuilles</router-link></slot></BlocCategorie>
          </div>
          <div class="col-3" id="blocAgenda">
             <BlocCategorie><slot><router-link class="nav-link active" aria-current="page" to="/produitAgenda">Agenda</router-link></slot></BlocCategorie>
          </div>

        </div>
        <div class="row">
          <div class="col-3" id="blocBureau">
            <BlocCategorie><slot><router-link class="nav-link active" aria-current="page" to="/produitBureau">Bureau</router-link></slot></BlocCategorie>
          </div>
          <div class="col-4" id="blocAdhesif">
            <BlocCategorie><slot><router-link class="nav-link active" aria-current="page" to="/produitAdhesif">Adhésifs</router-link></slot></BlocCategorie>
          </div>
          <div class="col-3" id="blocPeinture">
            <BlocCategorie><slot><router-link class="nav-link active" aria-current="page" to="/produitPeinture">Peinture</router-link></slot></BlocCategorie>
          </div>
        </div>
    </div>
  </div>

</template>

<script>

import ProduitAgenda from "@/components/Dropdown_folder/ProduitAgenda";
import ProduitCahier from "@/components/Dropdown_folder/ProduitCahier";
import ProduitBureau from "@/components/Dropdown_folder/ProduitBureau";
import ProduitAdhesif from "@/components/Dropdown_folder/ProduitAdhesif";
import ProduitPeinture from "@/components/Dropdown_folder/ProduitPeinture";
import BlocCategorie from "@/components/BlocCategorie";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Shop",
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