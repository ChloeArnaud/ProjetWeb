<template>
  <div>
    <TitreCategorie id="titre" :style="'background-color:'+cat.couleurCategorie">{{cat.NomCategorie}}</TitreCategorie>
    
    <div id="content" >
      <div class="container">
        <div class="row">
           <div class="col-md-4 mt-2" v-for="(produit,idProduit) in listProduitsParCategorie" :key="idProduit">
                <div class="card">
                    <div class="card-body">
                        <div class="card-img-actions">
                           <!-- :width="width+'px'" :height="height+'px'" -->
                                <img v-bind:src="getImgUrl(produit.imageProduit)" :width="width+'px'" :height="height+'px'" alt="img"> 
                    
                        </div>
                    </div>

                    <div class="card-body bg-light text-center">
                        <div class="mb-2">
                            <h6 class="font-weight-semibold mb-2">
                                <a href="#" class="text-default mb-2" data-abc="true" style="font-size:x-large">{{produit.NomProduit}}</a>
                            </h6>

                            <a href="#" class="text-muted" data-abc="true">Unité en stock : {{produit.uniteStockProduit}}</a>
                        </div>

                        <h3 class="mb-0 font-weight-semibold" style="font-size:x-large;">Prix : {{produit.prixProduit}}€</h3>
                        <div style="margin-top:20px;"></div>
                        <button type="button" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i>Ajoute au panier</button>
                        
                    </div>
                </div>           
           </div> 
      </div>
      </div>

    </div>
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
        width : 250,
        height : 350,
        listProduitsParCategorie : [],
    }
  },
  beforeCreate() {
    let id = this.$route.params.id;

    // GET CATEGORIE BY ID
    axios.get("http://127.0.0.1:3000/getcategoriebyid/"+id  ,function (req,res) {
       res.header("Access-Control-Allow-Origin", "*");})
        .then(result => {
              this.cat = result.data;
              this.idCategorieCourant = this.cat.idCategorie;
        })
        .catch(error => console.log(error));

  
    //GET ALL PRODUITS SELON LEUR CATEGORIE    
    axios.get("http://127.0.0.1:3000/getproduitbycategorie/"+id ,function (req,res) {
       res.header("Access-Control-Allow-Origin", "*");})
        .then(result => {
              this.listProduitsParCategorie = result.data;
              console.log("ID = "+id);
              if(id == 1){
                this.width = 90;
              }
              else if (id == 4){
                this.width = 250;
                this.height = 300;
              }
              //console.log("Produit :" + this.listProduitsParCategorie[0]);
        })
        .catch(error => console.log(error));
 
  },
  components:{
    TitreCategorie,
  },
  methods: {
      get_info_product(id)
      {
        this.desc_product = {};
        this.desc_product = this.stock.get_prod_by_id(id);
      },
      getImgUrl(img) {
        //var images = require.context('../assets', false, /\.png$/);
        //return images('./assets/photosProduits/' + img + '.png')
        //return '../assets/photosProduits/' + img + '.png';

        return require("@/assets/photosProduits/"+img+".png");
      }
    }
}


</script>

<style scoped>

.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .1875rem;
}

.card-img-actions {
    position: relative;
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
    text-align: center;
}

/* .card-img{

    width: 350px;
} */

.star{
        color: red;
}

.bg-cart {
     background-color: #E5BB70;
    color:#fff;
}

.bg-cart:hover {
    
    color:#fff;
}

.bg-buy {
    background-color:green;
    color:#fff;
    padding-right: 29px;
}
.bg-buy:hover {
    
    color:#fff;
}

a{

    text-decoration: none !important;
}
</style>