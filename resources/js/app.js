require('./bootstrap');
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

import router from './route.js';

const app = createApp(App).use(router).mount('#app');

