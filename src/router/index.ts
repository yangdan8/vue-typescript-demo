/// <reference path="../../node_modules/@types/webpack-env/index.d.ts" />
import Vue from 'vue';
import Router, { RouterOptions } from 'vue-router';
import Login from '../components/account/login.ts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'account_login',
      components: {
        Login: Login // require('../components/account/login.ts')
      // Login: resolve => require(['../components/account/login.ts'], resolve)
      // Login: (resolve) => {
      //   require.ensure([], (require) => {
      //     const cmp = require('../components/account/login').default;
      //     resolve(cmp);
      //   }, 'Login');
       }
    }
  ]
} as RouterOptions);
