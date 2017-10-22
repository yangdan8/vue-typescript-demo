import Vue from 'vue';
import router from './router/index';
require('normalize.css');
require('./app.scss');

Vue.config.productionTip = false;

export default new Vue({
  el: '#app',
  router,
  data: {
    name: 'GRRTGHFRGFFDFDFrouter'
  }
});