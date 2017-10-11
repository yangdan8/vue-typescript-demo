export default {
    mode: 'history',
    routes: [{
        path: '/',
        name: 'login',
        component: (resolve) => require(['@/components/account/login'], resolve)
    }, {
        path: '/account/logout',
        name: 'login',
        component: (resolve) => require(['@/components/account/logout'], resolve)
    }]
};