<script>
import AppLogin from "../components/AppLogin.vue";
import AppRegister from "../components/AppRegister.vue";

export default {
    components: {
        AppRegister
    },
    data() {
        return {

        }
    },

    methods:  {
        scrollToTOP() {
            window.scrollTo(0,0);
        }
    },

    created() {
        this.scrollToTOP();
    },
}
</script>

<template>
    <div id="prova" class="login_page">
        <AppRegister />
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