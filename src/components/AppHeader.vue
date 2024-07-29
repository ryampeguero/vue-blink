<script>
import { useAttrs } from 'vue';

export default {
    data() {
        return {
            menu: [
                {
                    title: "Home",
                    routeName: "home"
                },
                {
                    title: "Login",
                    routeName: "profile"
                },
                {
                    title: "Registrazione",
                    routeName: "register"
                },
            ],
            user: null,
            imgUrlBase: 'http://127.0.0.1:8000/storage',
        }
    },
    created() {
        // Recupera i dati dell'utente dal localStorage
        const userData = localStorage.getItem('user');
        if (userData) {
            this.user = JSON.parse(userData);
        }
    },
    methods: {
        logout() {
            // Rimuovi i dati dell'utente e il token dal localStorage
            localStorage.removeItem('user');
            localStorage.removeItem('token');

            // Reimposta lo stato dell'utente
            this.user = null;

            // Naviga verso la pagina di login
            this.$router.push('/login');
        }
    }
}
</script>

<template>

    <nav class="navbar navbar-expand-lg fixed-top bg-white py-3" aria-label="Fifth navbar example">

        <div class="header">
            <div class="prova">
                <div class="navbar-brand ms-3">
                    <a href="http://localhost:5174/">
                        <img class="logo" src="../../public/Icons/blink-logo-white.svg" alt="business logo">
                    </a>
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
                    <div class="" v-if="!user">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-2" id="login">
                            <li v-for="(item, index) in menu" class="">
                                <router-link :to="{ name: item.routeName }" class="nav-link p-3"
                                    :class="index == menu.length - 1 ? 'last' : ''">
                                    {{ item.title }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div v-else class="d-flex align-items-center gap-3">
                        <img class="imgUser rounded-circle"
                            :src="user.img_path ? `${imgUrlBase}/${user.img_path}` : `public/img/placeholder-img.png`"
                            alt="UserAvatar" />
                        <span>{{ user.name }}</span>
                        <button class="btn btn-primary" @click="logout">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>





</template>

<style lang="scss" scoped>
@use"../scss/partials/_variables" as*;

.imgUser {
    max-width: 70px !important;
}

#login {

    font-weight: bold;

    li:last-child {
        background-color: $secondary-color;
        color: white !important;
        margin: 0 10px;
        border-radius: 999em 999em 999em 999em;
        box-shadow: $shadow2;

        .router-link-active {
            color: white;
            font-weight: bolder;

            .icon_redi {
                filter: invert(100%) sepia(2%) saturate(310%) hue-rotate(342deg) brightness(118%) contrast(100%);
            }
        }

    }

    .icon_redi {
        min-height: 100%;
        min-width: 100%;
        max-width: 10px;
        max-height: 10px;
        color: $primary-color;
        margin: 0 10px 0 5px;


    }

    li:nth-child(2) {
        border: 1px solid $primary-color;
        margin: 0 10px;
        border-radius: 999em 999em 999em 999em;
        box-shadow: $shadow2;

        .router-link-active {
            color: #FF6827;
            font-weight: bolder;
        }

    }

}

.navbar {
    min-width: 100vw !important;
    min-height: 80px;
    padding: 0;

    .logo {
        max-height: 70px;
        min-height: 100%;
    }

    .header {
        min-width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        min-height: 80px;

        .navbar-brand {
            min-width: 100%;
            min-height: 100%;
            padding: 0;
        }

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
                    font-weight: bolder;
                }
            }

        }
    }



}
</style>