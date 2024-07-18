import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import About from "./pages/About.vue";
import AdvancedResearch from "./pages/AdvancedResearch.vue";
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
        },
    ],
});
