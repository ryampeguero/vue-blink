<script>
import AppCardSection from "../components/AppCardSection.vue";
import AppFirstSection from "../components/AppFirstSection.vue";
import AppHero from "../components/AppHero.vue";
import AppSearchPremium from "../components/AppSearchPremium.vue";

export default {
    components: {
        AppHero,
        AppFirstSection,
        AppCardSection,
        AppSearchPremium
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
    <AppHero />
    <AppFirstSection />
    <AppSearchPremium :isHome=true />
</template>

<style scoped lang="scss">

</style>