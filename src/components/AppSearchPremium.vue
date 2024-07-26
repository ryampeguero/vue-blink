<script>
import axios from 'axios';
import { store } from '../store';
import AppFlatCard from './AppFlatCard.vue';

export default {
    components: {
        AppFlatCard
    },
    data() {
        return {
            store,
            prova: store.searchPremium,
        };
    },
    watch: {
        prova: function (newVal) {
            console.log('sono qua dentro');
            if (newVal) {
                this.searchPremium();

            }
        }
    },
    methods: {
        searchPremium() {
            this.store.flatsLoaded = false;
            console.log('Latitude:', this.store.latitude);
            console.log('Longitude:', this.store.longitude);

            axios.get('http://127.0.0.1:8000/api/flats/searchpremium', {
                params: {
                    latitude: this.store.latitude,
                    longitude: this.store.longitude,
                    range: 0
                }
            })
                .then(response => {
                    this.store.flatArrayPremium = response.data.results;
                    console.log("Risultati:", response.data.results);
                })
                .catch(error => {
                    console.error('Errore:', error);
                }).finally(() => {
                    this.store.flatsLoaded = true;
                });
        },
    },

};
</script>

<template>
    <div class="bg ms_backC_card_spons pb-5 ">
        <div class="container">
            <h1 class="pt-5 result mb-4 text-white text-center mb-5">Appartamenti sponsorizzati</h1>
            <div class="row d-flex justify-content-between flex-wrap">
                <AppFlatCard :isPremium=true />
            </div>
        </div>
    </div>
</template>

<style></style>