import Vue from 'vue';
import App from './app/app.vue';
import vuetify from './plugins/vuetify';
import router from './app/app-routes';

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    render: h => h(App),
}).$mount('#app');
