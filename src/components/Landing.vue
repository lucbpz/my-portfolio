<template>
  <div class="about">
    <div class="main-title">
      <div class="typer">
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
      <vue-particles class="particles"
              color="#dedede"
              :particleOpacity="0.7"
              :particlesNumber="80"
              shapeType="circle"
              :particleSize="4"
              linesColor="#dedede"
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
      </vue-particles>
    </div>
  </div>
</template>

<script lang="js">
import { VueTyper } from "vue-typer";

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
      repeat: Infinity,
      scrolled: false
    };
  }
};
</script>

<style scoped lang="scss">
.about {
  background: #1a222c;
}

.main-title {
  color: #fff;
  display: grid;
  grid-template-rows: [row1-start] 100% [row1-end];
  grid-template-columns: [column1-start] 100% [column1-end];
  height: 100vh;;
  .typer {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .particles {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  h2 {
    color: #fff;
    font-size: 4rem;
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
  // color: #fafafa !important;
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
  color: #1a222c;
  background: #fff;
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
  background: #1a222c;
  color: #ededed;
  text-decoration: none;
}
</style>
