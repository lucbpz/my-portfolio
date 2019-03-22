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

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import Landing from "@/components/Landing.vue";

// import AboutMe from "@/components/AboutMe.vue";
// import Projects from "@/components/Projects.vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    Navbar,
    Landing,
    // AboutMe,
    // Projects
  }
})
export default class Home extends Vue {}
</script>
