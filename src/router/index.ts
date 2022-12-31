import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/User.vue')        
    },
    {
        path: '/repository',
        name: 'Repository',
        component: () => import('../views/Repository.vue')        
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: () => import('../views/Favorites.vue')        
    },
    {
        path: '/:catchAll(.*)',
        name: 'PageNotFound',
        component: () => import('../views/PageNotFound.vue')        
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router