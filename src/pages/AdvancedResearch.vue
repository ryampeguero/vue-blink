<script>
import AppHeroAR from '../components/AppHeroAR.vue';
import AppCardSection from "../components/AppCardSection.vue";



export default {
    components: {
        AppHeroAR,
        AppCardSection,

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
    <AppHeroAR />
    <AppCardSection />
</template>

<style>

</style>