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
    <div class="prime">
        <AppHeader/>
        <router-view></router-view>
            <AppFooter />
    </div>
</template>

<style lang="scss">

.prime {
    margin-top: 112px;
}
</style>
