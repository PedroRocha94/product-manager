<template>
  <Navbar/>
  <div class="product">
    <Toast/>
    <InputData 
      @AddProduct='requestPostProduct'
    />
    <ProductList  
      :products="products"
      @edit-modal="editProduct"
      @inactive-product="requestInactiveProduct"
    />
    <ModalEditProduct
      :product="modifyProduct"
      :displayEdit="displayEdit"
      @edit-product="requestEditProduct"
      @close-modal="closeModal"
    />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ProductList from '../components/ProductList.vue';
import InputData from '../components/InputData.vue';
import ModalEditProduct from '../components/ModalEditProduct.vue'

import { getAllProducts, postProduct, editProduct, inactiveProduct } from "../services/ProductService.js";

export default {
  name: 'Products',
  components: {
    Navbar,
    ProductList,
    InputData,
    ModalEditProduct
  },
  data() {
    return {
      product: {},
      modifyProduct: {},
      displayEdit: false,
      products: []
    }
  },
  async mounted() {
    await this.requestGetAllProducts();
  },
  methods: {
    notification(severity, detail){
      this.$toast.add({severity, detail, life: 3000});
    },
    editProduct(product){
      this.modifyProduct = {...product};
      this.showModal();
    },
    showModal(){
      this.displayEdit = true;
    },
    closeModal(){
      this.displayEdit = false
    },
    async requestGetAllProducts() {
      try {
        const response = await getAllProducts();
        let data = response.data;
        this.products = data.data;
        console.log(data);
      } catch {
        console.log("Error getAll");
      }
    },
    async requestPostProduct(product) {
      try {
        await postProduct(product);
        this.requestGetAllProducts();
        this.notification('success', `${product.name} added!`);
      } catch {
        this.notification('warn', `${product.name} already exists!`);
      }
    },
    async requestEditProduct(product){
      try {
        await editProduct(product.id, {
          name: product.name, 
          description: product.description
        });
        this.requestGetAllProducts();
        this.closeModal();
        this.notification('info', `${product.name} updated!`);
      } catch {
        this.closeModal();
        this.notification('error', `${product.name} not updated!`);
      }
    },
    async requestInactiveProduct(product){
      try {
        await inactiveProduct(product.id);
        this.requestGetAllProducts();
        this.notification('success', `${product.name} inactivated!`)
      } catch {
        this.notification('error', 'Error in inactive product!')
      }
    }   
  },
}
</script>