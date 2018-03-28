import Vue from 'vue';
import test from './test.js';
import App from './client/app.vue';

// const a = {};
// console.log(a, '>>>>>>>>>>App');
const app = new Vue({
    ...App
});

app.$mount('#App');