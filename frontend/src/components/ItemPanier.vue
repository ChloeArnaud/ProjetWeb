<template>
  <div class="ItemPanier">
    <div class="row">
      <table class="tabItemPanier">
        <tr>
          <th >Image</th>
          <th >Nom</th>
          <th >Prix</th>
          <th >Nombre de produits</th>
        </tr>
        <tr class="col" v-for="(product,id) in list_products" :key="id">
          <td ><img size="10px,10px" v-bind:src="getImgUrl(product.img)" alt="img" width="50px" height="50px"></td>
          <td >{{ product.name }}</td>
          <td >{{ product.price }}€</td>
          <td >{{ product.stock }}</td>
        </tr>

      </table>
      </div>
    </div>
</template>

<script>

import {Cart, Stock} from "@/manager";

export default {
  name: "ItemPanier",
  data() {
    return {
      stock: {},
      img: {},
      list_products: {},
      name: {},
      price: 0,
    }
  },
  created() {
    this.stock = new Stock();
    this.cart = new Cart();
    this.list_products = this.stock.get_list_product();
  },
    methods: {
      get_info_product(id)
      {
        this.desc_product = {};
        this.desc_product = this.stock.get_prod_by_id(id);
      },
      getImgUrl(img) {
        var images = require.context('../assets/', false, /\.png$/);
        return images('./' + img + ".png")
      }
    }

}
</script>

<style scoped>
.tabItemPanier {
  border-collapse: collapse;
  border: solid #2c3e50 !important;
  width: 90%;
  margin-left: 5%;

}
th,td{
  width: 25%;
}
</style>