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
    }
}
</script>

<template>
    <AppHero />
    <AppFirstSection/>
    <AppCardSection/>
</template>

<style scoped lang="scss">

</style>