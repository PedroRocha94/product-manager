<template>
  <div class="product-details">
    <h1>Product Details</h1>
    <Card>
      <template #title>
          <h3><strong>Details of {{ product.name }}</strong></h3>
      </template>
      <template #content>
          <span><strong>Nome: </strong>{{product.name}}</span><br>
          <span><strong>Description: </strong>{{product.description}}</span><br>
          <span><strong>Price: </strong>{{product.price}}</span><br>
          <span><strong>Created Date: </strong>{{product.createdDate}}</span><br>
          <span><strong>Updated Date: </strong>{{product.updatedDate}}</span><br>

      </template>
      <template #footer>
          <Button 
            icon="pi pi-arrow-left" 
            label="Back"
            @click="returnTable"
          />
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
    returnTable(){
      this.$router.push('/products');
    },
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