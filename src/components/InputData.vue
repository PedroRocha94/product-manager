<template>
  <div class="input-data">
    <span class="input-text">
      <InputText 
        id="name-product" 
        type="text" 
        v-model="product.name"
        placeholder='Name product'
      />

      <InputText 
        id="description-product" 
        type="text" 
        v-model="product.description"
        placeholder='Description product'
      />
      
      <Button 
        label="register"
        @click="registerProduct(product)"
      />
    </span>
  </div>
</template>

<script>

export default {
  name: "InputData",
  data() {
    return {
      product: {
        name: '',
        description: ''
      }
    };
  },
  methods: {
    registerProduct(product) {
      this.$emit('AddProduct', product);
    }
  }
};
</script>