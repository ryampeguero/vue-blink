import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import About from "./pages/About.vue";
import AdvancedResearch from "./pages/AdvancedResearch.vue";
import Profile from "./pages/Profile.vue";
import Login from "./pages/Login.vue";
import SingleCard from "./pages/SingleCard.vue";
import Register from "./pages/Register.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/ricerca-avanzata",
            name: "ricerca-avanzata",
            component: AdvancedResearch,
        },
        {
            path: "/about",
            name: "about",
            component: About,
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile,
            meta: { requiresAuth: true },
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/info/:slug",
            name: "single-card",
            component: SingleCard,
        },
        {
            path: "/Register",
            name: "register",
            component: Register,
        },
        
    ],
});
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = !!localStorage.getItem('authToken');

    if (requiresAuth && !isAuthenticated) {
        next('/login');
    } else if (to.path === '/login' && isAuthenticated) {
        next('/profile');
    } else {
        next();
    }
});

export default router;