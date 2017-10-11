import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
let RouterConfig = require('./config');

Vue.use(VueRouter);

// 路由配置
export default new VueRouter(RouterConfig);