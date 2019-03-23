<template>
  <div class="about" :style="$store.getters['theme']">
    <div class="main-title" :style="$store.getters['theme']">
      <div class="typer" :dark="$store.getters['isDark']">
        <vue-typer
          :text=nameAndQuote
          :repeat=repeat
          :shuffle="false"
          initial-action='typing'
          :pre-type-delay="70"
          :type-delay="70"
          :pre-erase-delay="2000"
          :erase-delay="250"
          erase-style='clear'
          :erase-on-complete="false"
          caret-animation='smooth'
        ></vue-typer>
      </div>
      <!-- <vue-particles v-if="renderComponent" class="particles"
              :color="theme.color"
              :particleOpacity="0.7"
              :particlesNumber="80"
              shapeType="circle"
              :particleSize="4"
              :linesColor="theme.color"
              :linesWidth="1"
              :lineLinked="true"
              :lineOpacity="0.4"
              :linesDistance="150"
              :moveSpeed="3"
              :hoverEffect="true"
              hoverMode="grab"
              :clickEffect="true"
              clickMode="push"
            >
      </vue-particles> -->
    </div>
  </div>
</template>

<script lang="js">
import { VueTyper } from "vue-typer";
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    VueTyper,
  },
  data() {
    return {
      nameAndQuote: [
        "Hi, I'm Lucas Bernalte",
        "I'm a Full Stack Developer",
        "I'm a musician",
        "I build user centered stuff"
      ],
      repeat: 0,
      scrolled: false,
    };
  },
  computed: {
    ...mapGetters([
      'theme',
      'isDark',
    ]),
    
  },
};
</script>

<style lang="scss">
.main-title {
  display: grid;
  grid-template-rows: [row1-start] 100% [row1-end];
  grid-template-columns: [column1-start] 100% [column1-end];
  height: 100vh;
  .typer {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    // z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    &[dark] {
      *.typed {
        color: #fafafa;
      }
    }

    &:not([dark]) {
      *.typed {
        color: #1a222c;
      }
    }
  }

  .particles {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  h2 {
    font-size: 4rem;
    color: red;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }
  p.subtitle {
    font-size: 1.7rem;
    margin: 0;
    @media (max-width: 767px) {
      font-size: 1rem;
    }
  }
}

.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  font-family: "Montserrat", sans-serif;
  font-size: 80px;
  font-weight: 900;

  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 768px) {
    /* For desktop: */
    font-size: 50px;
  }

}

.btn {
  display: inline-block;
  // color: #1a222c;
  // background: #fff;
  padding: 15px 25px;
  border: 1px solid #333;
  font-size: 14px;
  border-radius: 0px;
  font-weight: 300;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  text-transform: capitalize;
  border-radius: 30px;
}

.btn:hover {
  // background: #1a222c;
  // color: #ededed;
  text-decoration: none;
}


</style>
