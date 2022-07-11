<template>
  <Navbar/>
  <div class="product">
    <Toast/>
    <div class="button-selected-tables">
      <h2 class="button-selected-tables-title">Choose table product</h2>
      <div class="buttons">
        <Button 
          label="Table Product Active"
          @click="seeProductsActiveTable"
        />

        <Button 
          label="Table Product Inactive"
          @click="seeProductsInactiveTable"
        />
      </div>
    </div>

    <div class="input-data">
      <InputText
        id="name-product"
        type="text"
        v-model="product.name"
        placeholder="Name product"
      />

      <InputText
        id="description-product"
        type="text"
        v-model="product.description"
        placeholder="Description product"
      />

      <InputNumber
        v-model="product.price"
        mode="decimal"
        placeholder="0,00"
        :minFractionDigits="2"
        :maxFractionDigits="2"
      />

      <Button 
        icon="pi pi-pencil"
        v-tooltip="'Register Product'"
        @click="registerProduct(product)"
      />
    </div>

    <div class="text-for-table">
      <h2>{{ showTextTable }}</h2>
    </div>

    <ConfirmPopup></ConfirmPopup>

    <ProductList  
      :products="products"
      :productActive="productActive"
      :activeProduct="confirmActiveProduct"
      :inactiveProduct="confirmInactiveProduct"
      :removeProduct="confirmRemoveProduct"
      @edit-modal="editModal"
    />

    <ModalEditProduct
      ref="modalEditProduct"
      :product="modifyProduct"
      :displayEdit="displayEdit"
      @edit-product="editProduct"
    />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ProductList from '../components/ProductList.vue';
import ModalEditProduct from '../components/ModalEditProduct.vue';


import { 
  getAllProducts,
  postProduct,
  editProduct,
  deleteProduct,
  patchInactiveProduct,
  patchActiveProduct 
} from "../services/ProductService.js";

export default {
  name: 'Products',
  components: {
    Navbar,
    ProductList,
    ModalEditProduct
  },
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: null
      },
      modifyProduct: {},
      displayEdit: false,
      displayDetails: false,
      products: [],
      productActive: true,
      productDetails: {},
      textTableActive: ""
    }
  },
  computed: {
    showTextTable(){
      this.textTableActive = this.productActive 
                          ? "Table of Product Active" 
                          : "Table of Product Inactive";
      return this.textTableActive;
    }
  },
  async mounted(){
    await this.requestGetAllProducts(this.productActive);
  },
  methods: {
    notification(severity, detail){
      this.$toast.add({severity, detail, life: 3000});
    },
    confirmActiveProduct(event, product){
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Do you want to activate the product?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.activeProduct(product);
        },
        reject: () => {
        }
      });
    },
    confirmInactiveProduct(event, product){
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Do you want to inactivate the product?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.inactiveProduct(product);
        },
        reject: () => {
        }
      });
    },
    confirmRemoveProduct(event, product){
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Do you want to remove the product?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.removeProduct(product);
        },
        reject: () => {
        }
      });
    },
    clearFields(){
      this.product.name = '';
      this.product.description = '';
      this.product.price = '';
    },
    seeProductsActiveTable(){
      this.productActive = true;
      this.requestGetAllProducts(this.productActive);
    },
    seeProductsInactiveTable(){
      this.productActive = false;
      this.requestGetAllProducts(this.productActive);
    },
    editModal(product){
      this.modifyProduct = {...product};
      this.showModalEditProduct();
    },
    showModalEditProduct(){
      this.$refs.modalEditProduct.show();
    },
    showModalProductDetails(){
      this.$refs.modalProductDetails.show();
    },
    async registerProduct(product){
      await this.requestPostProduct(product);
      await this.requestGetAllProducts(this.productActive);
      this.clearFields();
    },
    async removeProduct(product){
      await this.requestRemoveProduct(product);
      await this.requestGetAllProducts(this.productActive);
    },
    async editProduct(product){
      await this.requestEditProduct(product);
      await this.requestGetAllProducts(this.productActive);
    },
    async activeProduct(product){
      await this.requestActiveProduct(product);
      await this.requestGetAllProducts(this.productActive);
    },
    async inactiveProduct(product){
      await this.requestInactiveProduct(product);
      await this.requestGetAllProducts(this.productActive);
    },
    async requestGetAllProducts(isActive) {
      try {
        const response = await getAllProducts(isActive);
        let data = response.data;
        this.products = data.data;
      } catch (error) {
        this.products = [];
        let dataError = error.response.data.error;
        this.notification('error', `Products ${dataError}!`);
      }
    },
    async requestPostProduct(product) {
      try {
        await postProduct(product);
        this.notification('success', `${product.name} added!`);
      } catch (error) {
        let dataError = error.response.data.errors;
        console.log(dataError);
        this.notification('warn', `${dataError[0]}!`);
      }
    },
    async requestEditProduct(product){
      try {
        await editProduct(product.id, {
          name: product.name, 
          description: product.description,
          price: product.price
        });
        this.$refs.modalEditProduct.close();
        this.notification('info', `${product.name} updated!`);
      } catch (error) {
        let dataError = error.response.data.errors;
        this.notification('error', `${dataError[0]}!`);
      }
    },
    async requestRemoveProduct(product){
      try {
        await deleteProduct(product.id);
        this.notification('success', `${product.name} removed!`);
      } catch (error) {
        let dataError = error.response.data.errors;
        this.notification('error', `${dataError[0]}!`);
      }
    },
    async requestInactiveProduct(product){
      try {
        await patchInactiveProduct(product.id);
        this.notification('success', `${product.name} inactivated!`);
      } catch {
        this.notification('error', 'Error in inactive product!');
      }
    },
    async requestActiveProduct(product){
      try {
        await patchActiveProduct(product.id);
        this.notification('success', `${product.name} activated!`);
      } catch {
        this.notification('error', 'Error in active product!');
      }
    }    
  },
}
</script>