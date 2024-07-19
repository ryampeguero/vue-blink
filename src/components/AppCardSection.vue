<script>
import AppFlatCard from './AppFlatCard.vue'
import axios from 'axios';
import { store } from '../store';

export default {
    components: {
        AppFlatCard,

    },
    data() {
        return {
            store,
        };
    },

    created() {
        axios.get("http://127.0.0.1:8000/api/flats/search", {
            params: {
                latitude: this.store.latitude,
                longitude: this.store.longitude,
            }
        }).then((resp) => {
            console.log(resp)

        })
    }
};
</script>

<template>
    <div class="bg ms_backC_card pb-5">
        <div class="container mt-5 mb-5">
            <h1 class="pt-5 result">RISULTATI RICERCA</h1>
            <div class="row d-flex justify-content-between">
                <AppFlatCard />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use"../scss/partials/_variables" as*;

.img_container {
    object-fit: fill;
    border-radius: 1.0rem;
    max-height: 100%;
    max-width: 100%;
}

.result {
    font-size: 3rem;
    font-weight: bolder;
}

.bg {
    margin-top: 100px;
}
</style>
