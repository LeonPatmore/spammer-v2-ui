import Vue from 'vue';
import Router from 'vue-router';

import clientsRoutes from '@/app/clients/clients-routes';

Vue.use(Router);

const appRoutes = [
    {
        path: '/',
    },
];

const routes = [...appRoutes, ...clientsRoutes];

export default new Router({
    mode: 'history',
    routes,
});
