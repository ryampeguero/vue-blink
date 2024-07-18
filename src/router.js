import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import About from "./pages/HomePage.vue";
import Contacts from "./pages/Contacts.vue";
import Profile from "./pages/Profile.vue";
import Login from "./pages/Login.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/contacts",
            name: "contacts",
            component: Contacts,
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