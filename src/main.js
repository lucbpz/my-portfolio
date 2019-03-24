import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueParticles from 'vue-particles';
import store from './store';
import FirebaseService from './services/firebase';

Vue.use(VueParticles);
Vue.use(FirebaseService);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount('#app');
