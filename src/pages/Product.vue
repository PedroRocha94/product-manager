<template>
  <div class="product">
    <Navbar/>
    <InputData/>
    <ProductList/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ProductList from '../components/ProductList.vue';
import InputData from '../components/InputData.vue';

export default {
  name: 'Products',
  components: {
    Navbar,
    ProductList,
    InputData
  }
}
</script>