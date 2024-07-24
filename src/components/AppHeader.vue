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
                    title: "ABOUT",
                    routeName: "about"
                },
                {
                    title: "LOGIN",
                    routeName: "profile"
                },
                {
                    title: "REGISTRAZIONE",
                    routeName: "register"
                },
            ]
        }
    },
}
</script>

<template>
    <!-- 
    <section class="header-menu">
        <div class="d-flex align-items-center ms-2">
            <img class="logo" src="../../public/Icons/blink-logo-white.svg" alt="business logo">
        </div>

        <ul class="align-items-center gap-4 me-4 d-none d-sm-flex d-md-flex">
            <li v-for="item in menu">
                <router-link :to="{ name: item.routeName }" class="nav-link p-3">{{ item.title }}</router-link>
            </li>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="true">
                    Dropdown button
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="dropdown">Action</a></li>
                    <li><a class="dropdown-item" href="dropdown">Another action</a></li>
                    <li><a class="dropdown-item" href="dropdown">Something else here</a></li>
                </ul>
            </div>
        </ul> -->

    <nav class="navbar navbar-expand-lg fixed-top bg-white" aria-label="Fifth navbar example">

        <div class="header">
            <div class="prova">
                <div class="navbar-brand ms-3">
                    <img class="logo" src="../../public/Icons/blink-logo-white.svg" alt="business logo">
                </div>
            </div>
            <div class="d-lg-none prova_btn me-3">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="prova d-flex justify-content-center">
                <div class="collapse navbar-collapse me-4" id="navbarsExample05">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li v-for="item in menu">
                            <router-link :to="{ name: item.routeName }" class="nav-link p-3">{{ item.title
                                }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <!-- </section> -->



</template>

<style lang="scss" scoped>
.navbar {
    min-width: 100vw !important;

    .logo {
        max-height: 80px;
        min-height: 100%;
    }

    .header {
        min-width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .prova_btn {
            width: 50%;
            display: flex;
            justify-content: end;
        }

        .prova {
            margin: 0 !important;
            min-width: calc(100% / 3) !important;
            max-width: calc(100% / 3 + 100px) !important;

            img {
                max-width: 40%;
            }
        }

        .collapse {

            justify-content: end;

            ul {
                display: flex;
                justify-content: end;
                margin: 0 !important;


                .router-link-active {
                    color: #FF6827;
                    font-weight: 600;
                }
            }

        }
    }



}

.header-menu {
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    height: 80px;
    max-height: 80px;
    position: fixed;
    width: 100%;
    z-index: 2;
    background-color: white;
    box-shadow: 2px 2px 10px #888888;


}
</style>