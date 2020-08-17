import Vue from 'vue';
import App from './app/app.vue';
import vuetify from './plugins/vuetify';
import router from './app/app-routes';
import SpammerService from '@/app/shared/services/spammer-service.js';
import store from '@/app/app-state.js';

Vue.config.productionTip = false;

SpammerService.getClients();

new Vue({
    data: {
        clients: [],
    },
    store,
    vuetify,
    router,
    render: h => h(App),
}).$mount('#app');
