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
import toList from '@/hocs/toList';
// import AboutMe from "@/components/AboutMe.vue";
import Projects from "@/components/Projects.vue";
import Project from "@/components/Project.vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

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
    projects: [{
      id: 1,
      imgSrc: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "title",
      description: "description"
    },{
      id: 2,
      imgSrc: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "title",
      description: "description"
    }]
  })
}
</script>
