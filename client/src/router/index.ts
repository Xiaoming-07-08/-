import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Home from '../viwes/Home.vue'
import Poem from '../viwes/Poem.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/poem',
        name: 'poem',
        component: Poem,
    }
]


export default createRouter({
    history: createWebHistory(),
    routes
})