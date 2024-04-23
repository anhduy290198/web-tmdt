// Views
import Vue from 'vue'
import {createRouter, createWebHistory} from 'vue-router';

Vue.component('home', require('./Layout/main.vue').default);

Vue.use(VueRouter);


const PREFIX_ROUTE = "/";

const routes = [
    {
        path: PREFIX_ROUTE + 'home',
        name: 'Home',
        component: Home
    },
];


const route = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default route
