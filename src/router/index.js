import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/404.vue")
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/Home.vue")
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router