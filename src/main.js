// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './common/reset.css';
import './common/index.css';
import router from './router';

Vue.use(iView);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    let title = to.meta.title;
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App: (resolve) => require(['./App'], resolve)
    }
});