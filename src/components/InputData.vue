<template>
  <div class="input-data">
    <span class="input-text">
      <Dropdown
        v-model="selectedTable"
        :options="tables"
        optionLabel="name"
        optionValue="value"
        placeholder="Select a List"
        @change="chooseTable"
      />

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
        :minFractionDigits="2"
        :maxFractionDigits="2"
      />

      <Button 
        label="register" 
        @click="registerProduct(product)"
      />
    </span>

    <div class="col-12 md:col-4">
      <div class="input-group">
        <InputNumber 
          placeholder="Search Product by Id"
          v-model="searchProductId" 
        />

        <Button 
          icon="pi pi-search" 
          class="p-button-warning"
          @click="searchProduct(searchProductId)"
        />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "InputData",
  props: {
    editProduct: {
      type: Object,
      default: new Object(),
    },
  },
  data() {
    return {
      product: {
        name: "",
        description: "",
        price: 0,
      },
      selectedTable: null,
      tables: [
        { name: "Product Active", value: true },
        { name: "Product Inactive", value: false },
      ],
      searchProductId: null
    };
  },
  methods: {
    clearFields() {
      if (this.product.name != ""){
        this.product.name = "";
        this.product.description = "";
        this.product.price = 0;
      }
      if (this.searchProductId != null){
        this.searchProductId = null
      }
    },
    registerProduct(product) {
      this.$emit("add-product", product);
      this.clearFields();
    },
    editInfoProduct() {
      this.product.name = this.editProduct.name;
      this.product.description = this.editProduct.description;
    },
    chooseTable() {
      this.$emit("choose-table", this.selectedTable);
    },
    searchProduct(searchProductId){
      this.$emit('search-product', searchProductId);
      this.clearFields();
    }
  },
};
</script>