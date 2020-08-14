import Vue from 'vue';
// import App from './App.vue'

Vue.config.productionTip = false;

import myButton from './button.vue';
import vuetify from './plugins/vuetify';

new Vue({
    vuetify,
    render: h => h(myButton),
}).$mount('#app');
