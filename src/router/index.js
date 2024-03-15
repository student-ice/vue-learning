import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/404.vue")
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router