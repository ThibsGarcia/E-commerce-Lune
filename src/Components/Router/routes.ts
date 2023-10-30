import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

import WhiteChairs from '../PresentationWhite/WhiteChairs.vue';
import BlackChairs from '../PresentationBlack/BlackChairs.vue';

export const routes : RouteRecordRaw[] = [
    {
        path: '/',
        component: WhiteChairs,
    },
    {
        path: '/WhiteChairs',
        component: WhiteChairs,
    },
    {
        path: '/BlackChairs',
        component: BlackChairs,
    },
];

export default routes;