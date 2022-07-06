<template>
  <div class="modal-edit-product">
    <Dialog 
      header="Edit Product" 
      v-model:visible="displayEdit"
      :closable = "false"
      :modal="true"
    >
      <InputText 
        label="Name Product" 
        v-model="product.name"
      />

      <InputText 
        label="Description Product" 
        v-model="product.description"
      />
      <InputNumber
        label="Price Product"
        v-model="product.price"
      />

      <Button 
        label="Confirm" 
        @click="editProduct(product)"
      />
      <Button 
        label="Cancel" 
        class="p-button-danger"
        @click="cancelEdit"
      />
    </Dialog>
  </div>
</template>

<script>
export default {
  name: 'ModalEditProduct',
  props: {
    displayEdit: {
      type: Boolean,
      default: false
    },
    product: {
      type: Object,
      default: new Object()
    }
  },
  methods: {
    editProduct(product){
      this.$emit('edit-product', product);
    },
    cancelEdit(){
      this.$emit('close-modal');
    }
  }
};
</script>

<style>
</style>