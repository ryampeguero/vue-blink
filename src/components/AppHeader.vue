<script>
export default {
    data() {
        return {
            menu: [
                {
                    title: "HOME",
                    routeName: "home"
                },
                {
                    title: "CONTACTS",
                    routeName: "contacts"
                },
                {
                    title: "ABOUT",
                    routeName: "about"
                },
                {
                    title: "PROFILE",
                    routeName: "profile"
                },
            ]
        }
    },
}
</script>

<template>

    <section class="header-menu justify-content-between">
        <!-- LOGO -->
        <div class="d-flex align-items-center ms-2">
            <img class="logo" src="../../public/Icons/blink-logo-white.svg" alt="business logo">
        </div>
        <!-- MENU LIST ITEM -->
        <ul class="align-items-center gap-4 me-4">
            <li v-for="item in menu">
                <router-link :to="{ name: item.routeName }" class="nav-link p-3">{{ item.title }}</router-link>
            </li>
        </ul>
    </section>

</template>

<style lang="scss" scoped>
.header-menu {
    top: 0;
    left: 0;
    display: flex;
    height: 80px;
    max-height: 80px;
    position: fixed;
    width: 100%;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0);
    box-shadow: 2px 2px 10px #888888;


    
    .logo {
        object-fit: fill;
        height: 60%;
        width: 100%;
    }

    ul {
        display: flex;
        margin-bottom: 0;
        .router-link-active {
            color: blue;
            font-weight: 600;
        }
    }

}
</style>