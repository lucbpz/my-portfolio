<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Navbar/>
    <Landing/>
    <!-- <AboutMe/>
    <Projects/> -->
  </div>
</template>

<script lang="js">
import Navbar from "@/components/Navbar.vue";
import Landing from "@/components/Landing.vue";

// import AboutMe from "@/components/AboutMe.vue";
// import Projects from "@/components/Projects.vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default {
  name: 'home',
  components: {
    Navbar,
    Landing,
    // AboutMe,
    // Projects
  }
}
</script>
