<template>
  <div class="product-details">
    <h1>Product Details</h1>
    {{id}}
    <Card>
      <template #title>
          Advanced Card
      </template>
      <template #content>
          <span>Nome: {{product.name}}</span>
          <span>Description: {{product.description}}</span>
          <span>Price: {{product.price}}</span>
          <span>Created Date: {{product.createdDate}}</span>
          <span>Updated Date: {{product.updatedDate}}</span>

      </template>
      <template #footer>
          <Button icon="pi pi-check" label="Save" />
          <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
      </template>
    </Card>
  </div>
</template>

<script>
import { getProductById } from '../services/ProductService.js';

export default {
  name: 'ProductDetails',
  props: {
    id: {
      type: String,
      default: 0
    }
  },
  data(){
    return {
      product: {}
    }
  },
  async mounted(){
    await this.requestProductById();
    console.log(this.product)
  },
  methods: {
    async requestProductById(){
      try {
        const response = await getProductById(this.id);
        let data = response.data.data;
        this.product = {...data};
      } catch {
        console.log("Error");
      }
    }
  }

}
</script>