<template>
  <Navbar/>
  <div class="about">
    <h1>About</h1>
    <p>This project was developed from a challenge created by Rogério Silva 
      {link github} where an API of a CRUD of products was consumed.
      {repository link}
    </p>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'About',
  components: {
    Navbar
  }
}
</script>