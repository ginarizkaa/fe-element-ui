// import Authenticate from './auth/Authenticate'
// import SessionCheck from "./auth/SessionCheck"
// import Dashboard from './modules/Dashboard'
// import Settings from './modules/Settings'

const MainRoutes = [
    {
        path: '/notfound',
        name: 'Notfound',
        component: () => import('@/views/Landing/NotFound.vue')
    },
    {
        path: '/signin',
        // beforeEnter: SessionCheck,
        name: 'Login',
        component: () => import('@/views/Landing/LoginPage.vue')
    }
    // {
    //     path: '/',
    //     beforeEnter: Authenticate,
    //     redirect: '/signin',
    //     component: () => import('@/views/Layout/MainLayout.vue'),
    //     children: [...Settings, ...Dashboard]
    // }
]

export default MainRoutes
