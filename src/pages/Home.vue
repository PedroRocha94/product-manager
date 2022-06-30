<template>
  <Navbar/>
  <div class="home">
    <Banner/>
    <h1>Product Manager</h1>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Banner from '../components/Banner.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Banner
  }
}
</script>