import Vue from 'vue';
import router from './router/index';
require('normalize.css');
require('./app.scss');
require('./i18n/zh_cn.json');

Vue.config.productionTip = false;

export default new Vue({
  el: '#app',
  router,
  data: {
    name: 'GRRTGHFRGFFDFDFrouter'
  }
});