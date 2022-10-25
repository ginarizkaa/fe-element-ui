import Vue from 'vue'
import VueRouter from 'vue-router'
import MainRoutes from './MainRoutes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [...MainRoutes],
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        router.push({ name: 'Notfound' })
    } else {
        next()
    }
})

export default router
