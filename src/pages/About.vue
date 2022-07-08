<template>
  <Navbar />
  <div class="about">
    <div class="content-about">
      <h1 class="about-title">About</h1>
      <p class="about-description">
        This project was developed from a challenge created by Rogério Silva
        <a href="https://github.com/rogerioSilva60">link github</a>
        where an API of a CRUD of products was consumed.
        <a href="https://github.com/rogerioSilva60/test-project-spring"
          >repository link</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "About",
  components: {
    Navbar,
  },
};
</script>