<template>
  <Navbar/>
  <div class="product">
    <Toast/>
    <InputData 
      @add-product='requestPostProduct'
      @choose-table="activeProductsTable"
    />

    <ProductList  
      :products="products"
      :productActive="productActive"
      @remove-product="requestRemoveProduct"
      @edit-modal="editProduct"
      @inactive-product="requestInactiveProduct"
      @active-product="requestActiveProduct"
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

import { getAllProducts,
         postProduct,
         editProduct,
         deleteProduct,
         inactiveProduct,
         activeProduct } from "../services/ProductService.js";

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
      products: [],
      productActive: true,
    }
  },
  async mounted() {
    await this.requestGetAllProducts(true);
  },
  methods: {
    notification(severity, detail){
      this.$toast.add({severity, detail, life: 3000});
    },
    activeProductsTable(event){
      this.productActive = event;
      this.requestGetAllProducts(event);
    },
    editProduct(product){
      this.modifyProduct = {...product};
      this.showModal();
    },
    showModal(){
      this.displayEdit = true;
    },
    closeModal(){
      this.displayEdit = false;
    },
    async requestGetAllProducts(isActive) {
      try {
        const response = await getAllProducts(isActive);
        let data = response.data;
        this.products = data.data;
      } catch {
        this.notification('error', 'Products not found!');
      }
    },
    async requestPostProduct(product) {
      try {
        await postProduct(product);
        this.requestGetAllProducts(this.productActive);
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
        this.requestGetAllProducts(this.productActive);
        this.closeModal();
        this.notification('info', `${product.name} updated!`);
      } catch {
        this.closeModal();
        this.notification('error', `${product.name} not updated!`);
      }
    },
    async requestRemoveProduct(product){
      this.productActive = false;
      try {
        await deleteProduct(product.id);
        this.requestGetAllProducts(this.productActive);
        this.notification('success', `${product.name} removed!`);
      } catch {
        this.notification('error', `Error removing ${product.name}!`);
      }
    },
    async requestInactiveProduct(product){
      this.activeProduct = true;
      try {
        await inactiveProduct(product.id);
        this.requestGetAllProducts(this.productActive);
        this.notification('success', `${product.name} inactivated!`);
      } catch {
        this.notification('error', 'Error in inactive product!');
      }
    },
    async requestActiveProduct(product){
      this.productActive = false;
      try {
        await activeProduct(product.id);
        this.requestGetAllProducts(this.productActive);
        this.notification('success', `${product.name} activated!`);
      } catch {
        this.notification('error', 'Error in active product!');
      }
    }    
  },
}
</script>