import Vue from 'vue';
import Router, { RouterOptions } from 'vue-router';
const Login = () => import('../components/account/login');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'account_login',
      component: Login
    }
  ]
} as RouterOptions);