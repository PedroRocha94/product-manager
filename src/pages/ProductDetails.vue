<template>
  <div class="product-details">
    <Card class="card-product-details">
      <template #title>
        <h3 class="title"><strong>Details of {{ product.name }}</strong></h3>
      </template>
      <template #content>
        <span><strong>Id: </strong>{{product.id}}</span>
        <span><strong>Status: </strong>{{status}}</span>
        <span><strong>Nome: </strong>{{product.name}}</span>
        <span><strong>Description: </strong>{{product.description}}</span>
        <span><strong>Price: </strong>{{product.price}}</span>
        <span><strong>Created Date: </strong>{{product.createdDate}}</span>
        <span><strong>Updated Date: </strong>{{product.updatedDate}}</span>
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
  computed:{
    status(){
      return this.product.isActive ? "Ativo" : "Inativo"
    }
  },
  async mounted(){
    await this.requestProductById();
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