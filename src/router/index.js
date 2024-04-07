import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/login',
        name: 'login',
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

router.beforeEach((to,from,next) => {
    const token = window.sessionStorage.getItem("token");
    if (token) {
        if (to.path === "/login") {
            next(from.path ? from.path : "/")
        }else {
            next();
        }
    }else {
        if (to.path === "/login") {
            next();
        }else {
            next('/login')
        }
    }
})

export default router