<template>
  <div>
    <nav class="navbar" v-bind:class="{ navbarScrolled: scrolled }">
        <div class="navbar-full">
            <div class="navbar-full__title">
                <h1 class="site-title">{{title}}</h1>
            </div>
            <div class="navbar-full__menu">
                <ul class="nav-list">
                    <li class="nav-item">About Me</li>
                    <li class="nav-item">Work</li>
                    <li class="nav-item">Contact</li>
                </ul>
            </div>
        </div>
        <Slide class="navbar-responsive">
          <a id="home" href="#">
            <span>Home</span>
          </a>
        </Slide>
    </nav>
  </div>
</template>


<script lang="js">
// import { Component, Vue } from "vue-property-decorator";
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  components: {},
  data() {
    return {
      title: "<MyPortfolio/>",
      scrolled: false
    };
  },
  components: {
      Slide,
  },
  methods: {
    handleScroll: function() {
      this.scrolled = window.scrollY > 400;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }
};
</script>

<style lang="scss">
.navbar {
  position: absolute;
  // width: 96vw;
  // flex-direction: row;
  transition: all 1s linear;
  color: #fafafa;
  height: 10vh;
  // width: 100vw;
  // align-items: center;
  // justify-content: flex-start;
  padding: 16px;

  .navbarScrolled {
    background: #1a222c;
    font-size: 12px;
    li {
      font-size: 14px;
    }
  }

  .navbar-full {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;


    .navbar-full__title {
      text-align: left;
      flex-grow: 1;
    }
  }
  .navbar-full__menu {
    .nav-list {
      display: flex;
      justify-content: space-around;
      .nav-item {
        padding: 0 8px;
        font-size: 16px;
      }
    }  
  }
  li {
    list-style: none;
    display: inline;
    transition: all 1s linear;
  }
  @media only screen and (max-width: 480px) {
    width: 91vw;
    .navbar-full {
      display: none;
    }
    .navbar-responsive {
      display: flex;
    }
  }
  @media only screen and (min-width: 480px) {
    width: 96vw;
    .navbar-responsive {
      display: none;
    }
    .navbar-full {
      display: flex;
    }
  }
}
</style>
