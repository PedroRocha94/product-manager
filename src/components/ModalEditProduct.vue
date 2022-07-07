<template>
  <div class="modal-edit-product">
    <Dialog
      header="Edit Product"
      v-model:visible="displayEdit"
      :closable="false"
      :modal="true"
    >
      <InputText label="Name Product" v-model="product.name" />

      <InputText label="Description Product" v-model="product.description" />

      <InputNumber label="Price Product" v-model="product.price" />

      <Button label="Confirm" @click="editProduct(product)" />
      
      <Button label="Cancel" class="p-button-danger" @click="close" />
    </Dialog>
  </div>
</template>

<script>
export default {
  name: "ModalEditProduct",
  emits: ["edit-product"],
  props: {
    product: {
      type: Object,
      default: new Object(),
    },
  },
  data() {
    return {
      displayEdit: false,
    };
  },
  methods: {
    show() {
      this.displayEdit = true;
    },
    close() {
      this.displayEdit = false;
    },
    editProduct(product) {
      this.$emit("edit-product", product);
    },
  },
};
</script>

<style>
</style>