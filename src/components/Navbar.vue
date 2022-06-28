<template>
  <nav class="navbar">
    <ul>
      <router-link tag="li" to="/">Home</router-link>
      <router-link tag="li" to="/products">Products</router-link>
      <router-link tag="li" to="/about">About</router-link>
    </ul>
    
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>