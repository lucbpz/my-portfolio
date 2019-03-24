<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Navbar/>
    <Landing/>
    <Projects :theme="$store.getters['theme']" :items="projects"/>
    <!-- <AboutMe/>
    <Projects/> -->
  </div>
</template>

<script lang="js">
import Navbar from "@/components/Navbar.vue";
import Landing from "@/components/Landing.vue";
// import toList from '@/hocs/toList';
// import AboutMe from "@/components/AboutMe.vue";
import Projects from "@/components/Projects.vue";
import Project from "@/components/Project.vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import FirebaseService from "@/services/firebase";
// const Projects = toList(Project);

export default {
  name: 'home',
  components: {
    Navbar,
    Landing,
    // AboutMe,
    Projects
  },
  data: () => ({
    projects: []
  }),
  async created() {
    this.projects = await FirebaseService.getProjects();
  }
}
</script>
