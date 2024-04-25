// Views
import {createRouter, createWebHistory} from 'vue-router';

import Home from './Layout/main.vue';
import Test from './Layout/test.vue';

const PREFIX_ROUTE = "/";

const routes = [
    {
        path: PREFIX_ROUTE + 'home',
        name: 'Home',
        component: Home
    },
    {
        path: PREFIX_ROUTE + 'test',
        name: 'Test',
        component: Test
    },
];


const route = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default route
