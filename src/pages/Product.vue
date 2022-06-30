<template>
  <Navbar/>
  <div class="product">
    <InputData @AddProduct='requestPostProduct($event)'/>
    <ProductList :products="products"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ProductList from '../components/ProductList.vue';
import InputData from '../components/InputData.vue';

import { getAllProducts, postProduct } from "../services/ProductService.js";

export default {
  name: 'Products',
  components: {
    Navbar,
    ProductList,
    InputData
  },
  data() {
    return {
      products: []
    }
  },
  async mounted() {
    await this.requestGetAllProducts();
  },
  methods: {
    async requestGetAllProducts() {
      try {
        const response = await getAllProducts();
        let data = response.data;
        this.products = data.data;
      } catch {
        console.log("Error getAll");
      }
    },
    async requestPostProduct(product) {
      try {
        await postProduct(product);
        this.requestGetAllProducts();
      } catch {
        console.log("Error post");
      }
    }
  },
}
</script>