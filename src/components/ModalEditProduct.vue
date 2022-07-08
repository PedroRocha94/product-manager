<template>
  <div class="modal-edit-product">
    <Dialog
      class="dialog-edit-product"
      header="Edit Product"
      v-model:visible="displayEdit"
      :closable="false"
      :modal="true"
    >
      <div class="input-edit-product">
        <label>Name Product: </label>
        <InputText label="Name Product" v-model="product.name" />
        <label>Description Product: </label>
        <InputText label="Description Product" v-model="product.description" />
        <label>Price Product: </label>
        <InputNumber label="Price Product" v-model="product.price" />
      </div>

      <div class="buttons-edit-product">
        <Button label="Confirm" @click="editProduct(product)" />

        <Button label="Cancel" class="p-button-danger" @click="close" />
      </div>
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