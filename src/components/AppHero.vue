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
    <header>
        <div class="hero flex-column d-flex justify-content-center align-items-center">
            <div class="">
                <h1 class="title_hero">Scopri la tua prossima meta</h1>
            </div>
            <div class="ms_search_bar mt-5">
                <div class="p-4 d-flex gap-5 align-items-center">
                    <div>
                        <input placeholder="Dove vuoi soggiornare?" value="" name="address" class="form-control ms_search_bar" type="text" id="address" autocomplete="off">
                    </div>
                    <div>
                        <button class="ms_button search_ico " type="submit"><img class="btn_search" src="../../public/Icons/search.svg" alt=""></button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use"../scss/partials/_variables" as*;

.hero {
    background-size: cover;
    background-image: url("../../public/img/modern-house.jpg");
    background-repeat: no-repeat;
    min-height: 700px;
    margin-top: 80px;

    .search_ico {
        aspect-ratio: 1;
        border-radius: 50%;
    }

    .title_hero {
        font-size: 5rem;
        color: white;
        font-weight: bolder;
    }

    .btn_search {
        height: 40px;
        width: 40px;
        border-radius: 1.5rem;
    }
}
</style>
