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
    <AppHeader/>

    <router-view class="main">
    </router-view>

    <AppFooter />
</template>

<style lang="scss">
.main {
    min-height: calc(100vh - 80px - 300px);
    margin-top: 80px;
}
</style>
