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

      <Button label="register" @click="registerProduct(product)" />
    </span>
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
      },
      selectedTable: null,
		  tables: [
        {name: 'Product Active', value: true},
        {name: 'Product Inactive', value: false}
		  ]
    }
  },
  methods: {
    registerProduct(product) {
      this.$emit("AddProduct", product);
    },
    editInfoProduct() {
      this.product.name = this.editProduct.name;
      this.product.description = this.editProduct.description;
    },
    chooseTable(){
      this.$emit('choose-table', this.selectedTable);
    }
  },
};
</script>