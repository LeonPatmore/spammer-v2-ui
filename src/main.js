import Vue from 'vue';
// import App from './App.vue'
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false;

import myButton from './button.vue';

new Vue({
    vuetify,
    render: h => h(myButton),
}).$mount('#app');
