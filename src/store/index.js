import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    theme: {
        backgroundColor: '#fafafa',
        primary: '#1a222c',
        color: '#1a222c',
        accent: '#8c9eff',
        error: '#b71c1c',
    },
    isDark: false,
};

const mutations = {
  setLightTheme(state) {
    state.theme = {
        backgroundColor: '#fafafa',
        primary: '#7CFC00',
        color: '#1a222c',
        accent: '#8c9eff',
        error: '#b71c1c',
    };
    state.isDark = false;
  },
  setDarkTheme(state) {
    state.theme = {
        backgroundColor: '#1a222c',
        primary: '#FF0000',
        color: '#fafafa',
        accent: '#8c9eff',
        error: '#b71c1c',
    };
    state.isDark = true;
  }
};

const getters = {
  theme: state => state.theme,
  isDark: state => state.isDark
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
});