<script>
export default {
    components: {

    },
    data() {
        return {

        };
    },
};
</script>

<template>
<div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-between">
        <h1 class="mb-3">Le camere più viste</h1>
        <div class="col-3 ms_card_img">
            <img class="img_container" src="../../public/img/modern-house.jpg" alt="">
        </div>

        <div class="col-3 ms_card_img">
            <img class="img_container" src="../../public/img/modern-house.jpg" alt="">
        </div>

        <div class="col-3 ms_card_img">
            <img class="img_container" src="../../public/img/modern-house.jpg" alt="">
        </div>

        <div class="col-3 ms_card_img">
            <img class="img_container" src="../../public/img/modern-house.jpg" alt="">
        </div>

    </div>
</div>
</template>

<style lang="scss" scoped>
@use"../scss/partials/_variables" as*;

.img_container {
    object-fit: fill;
    border-radius: 1.0rem;
    max-height:100%;
    max-width: 100%;
}

</style>
