import { createRouter, createWebHashHistory } from "vue-router"
import { useUserStore } from "@/store/index.js";
import nProgress from "nprogress"

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

router.beforeEach(async(to,from,next) => {
    nProgress.start();
    const token = window.sessionStorage.getItem("token");
    if (token) {
        if (to.path === "/login") {
            next(from.path ? from.path : "/")
        }else {
            // 如果已经登录，在打开页面的时候获取管理员信息
            await useUserStore().getUserInfo();
            next();
        }
    }else {
        if (to.path === "/login" || to.path === "/:pathMatch(.*)*") {
            next();
        }else {
            next('/login')
        }
    }
})

router.afterEach((to,from) => {
    nProgress.done();
})

export default router