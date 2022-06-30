<template>
  <div class="product">
    <Navbar/>
    <ProductList/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ProductList from '../components/ProductList.vue';

export default {
  name: 'Products',
  components: {
    Navbar,
    ProductList
  }
}
</script>