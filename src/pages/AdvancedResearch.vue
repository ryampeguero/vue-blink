<script>
import AppHeroAR from '../components/AppHeroAR.vue';
import AppCardSection from "../components/AppCardSection.vue";
import AppSearchPremium from '../components/AppSearchPremium.vue';



export default {
    components: {
        AppHeroAR,
        AppCardSection,
        AppSearchPremium,

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
    <AppSearchPremium />
    <AppCardSection :isHome=false />

</template>

<style></style>