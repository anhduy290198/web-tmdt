require('./bootstrap');
window.Vue = require('vue');

import route from './route.js';

const app = new Vue({
    el: '#app',
    router: route,
});
