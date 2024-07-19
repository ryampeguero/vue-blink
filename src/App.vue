<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'


export default {
    components: {
        AppHeader,
        AppFooter,

    },
    data() {
        return {
            
        }
    },
}
</script>

<template>
<<<<<<< HEAD

    <AppHeader />
    <router-view></router-view>
    <AppFooter />
=======
    <div class="prime">
        <AppHeader />
        <router-view></router-view>
            <AppFooter />
    </div>
>>>>>>> 8557d70d9bf50d47609c841e4942d632b93864ec
</template>

<style lang="scss">
.prime {
    max-width: 100%;
    overflow-x: hidden;
}
</style>
