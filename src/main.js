import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'vue2-animate/dist/vue2-animate.min.css';
// import Velocity from 'velocity-animate'
require('velocity-animate');
require('velocity-animate/velocity.ui');
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI)
// Vue.use(Velocity)

new Vue({
  el: '#app',
  render: h => h(App)
})
