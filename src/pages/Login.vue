<script>
import AppLogin from "../components/AppLogin.vue";

export default {
    components: {
        AppLogin
    },
    data() {
        return {

        }
    },
    created() {
    },
}
</script>

<template>
    <div id="prova" class="login_page">
        <AppLogin />
    </div>
</template>

<style lang="scss" scoped>
.login_page {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../public/img/background_login.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 800px;
    scroll-behavior: smooth;
    height: 100vh;
}
</style>