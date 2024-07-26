<script>
import AppCardSection from "../components/AppCardSection.vue";
import AppFirstSection from "../components/AppFirstSection.vue";
import AppHero from "../components/AppHero.vue"

export default {
    components: {
        AppHero,
        AppFirstSection,
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
    <AppHero />
    <AppFirstSection/>
</template>

<style scoped lang="scss">

</style>