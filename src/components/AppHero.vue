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
    <div class="hero flex-column d-flex justify-content-center align-items-center">
        <div class="">
            <h1>Scopri la tua prossima meta</h1>
        </div>
        <div class="ms_search_bar mt-5">
            <div class="p-4">
                <label class="fomr-label" for="address">Dove vuoi soggiornare? </label>
                <input value="" name="address" class="form-control" type="text" id="address"
                    autocomplete="off">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use"../scss/partials/_variables" as*;

.hero {
    background-size: cover;
    background-image: url("../../public/img/modern-house.jpg");
    background-repeat: no-repeat;

}
</style>
