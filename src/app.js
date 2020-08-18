import Vue from 'vue';
import App from './app/app.vue';
import vuetify from './plugins/vuetify';
import router from './app/app-routes';
// import SpammerService from '@/app/shared/services/spammer-service.js';
import { createStore } from '@/app/app-state.js';
import { sync } from 'vuex-router-sync';

export function createApp() {
    const store = new createStore();

    sync(store, router);

    const app = new Vue({
        store,
        vuetify,
        router,
        render: h => h(App),
    }).$mount('#app');

    return { app, router, store };
}
