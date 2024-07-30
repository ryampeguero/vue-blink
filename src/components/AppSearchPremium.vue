<script>
import axios from 'axios';
import { store } from '../store';
import AppFlatCard from './AppFlatCard.vue';

export default {
    components: {
        AppFlatCard
    },
    props: {
        isHome: Boolean,
        premiumText: String,
    },
    data() {
        return {
            store,
            prova: store.searchPremium,
        };
    },
    created() {
        if (this.isHome) {
            this.getPremiums();
        }
    },
    watch: {
        prova: function (newVal) {
            console.log('sono qua dentro');
            if (newVal && this.isHome == false) {
                this.searchPremium();

            }
        }
    },
    methods: {
        getPremiums() {
            axios.get('http://127.0.0.1:8000/api/flats/premium').then((response) => {
                this.store.flatArrayPremium = response.data.results;
                console.log('prova');
            });
        },
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
            <h1 class="pt-5 result mb-4 text-white text-center mb-5">{{ premiumText }}</h1>
            <div class="row premium-section">
                <AppFlatCard :isPremium=true :isHome=true />
            </div>
        </div>
    </div>
</template>

<style>
.premium-section {
    display: flex;
    justify-content: center !important;
    gap: 10px;   
}
</style>