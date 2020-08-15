import Vue from 'vue';
import Router from 'vue-router';

import { clientsRoutes } from './clients';

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
