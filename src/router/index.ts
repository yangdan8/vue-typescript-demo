// /// <reference path="../../node_modules/@types/webpack-env/index.d.ts" />

import Vue from 'vue';
import Router, { RouterOptions } from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'account_login',
      components: {
        Login: (resolve) => {
          // require.ensure([], (require) => {
          //   const cmp = require('../components/account/login').default;
          //   resolve(cmp);
          // }, 'Login');
          require(['../components/account/login.ts'], resolve);
        }
      }
    }
  ]
} as RouterOptions);
