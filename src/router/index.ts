import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue') 
    },
    {
        path: '/userslist',
        name: 'UsersList',
        component: () => import('../views/UsersList.vue') 
    },

    // {
    //     path: '/user',
    //     name: 'User',
    //     component: () => import('../views/User.vue')        
    // },
    // {
    //     path: '/repository',
    //     name: 'Repository',
    //     component: () => import('../views/Repository.vue')        
    // },

    // {
    //     path: '/:catchAll(.*)',
    //     name: 'PageNotFound',
    //     component: () => import('../views/PageNotFound.vue')        
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router