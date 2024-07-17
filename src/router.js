import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import About from "./pages/HomePage.vue";
import Contacts from "./pages/Contacts.vue";
import Profile from "./pages/Profile.vue";

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
        },
    ],
});
