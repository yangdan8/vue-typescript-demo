/// <reference path="../../types/index.d.ts" />

import Vue from 'vue';
import Router, { RouterOptions } from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'account_login',
      components: {
        Login: (resolve) => {
          require.ensure([], (require) => {
            const cmp = require('../components/account/login').default;
            resolve(cmp);
          });
        }
      }
    }
  ]
} as RouterOptions);
