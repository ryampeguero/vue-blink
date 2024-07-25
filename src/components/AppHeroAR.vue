<script>
import axios from 'axios';
import { store } from '../store';
import tt from '@tomtom-international/web-sdk-maps';

import AppInputCounter from './AppInputCounter.vue';
import AppSearchBox from './AppSearchBox.vue';
import AppMap from './AppMap.vue';
import AppSearchBoxAR from './AppSearchBoxAR.vue';

export default {
    components: {
        AppSearchBox,
        AppInputCounter,
        AppMap,
        AppSearchBoxAR,
    },
    data() {
        return {
            store,
            query: '',
            suggestions: [],
            selectedIndex: -1,
            latitude: '',
            longitude: '',
            apiKey: 'bKZHQIbuOQ0b5IXmQXQ2FTUOUR3u0a26',
        };
    },

methods: {

    fetchSuggestions() {
        if (this.query.length > 2) {
            fetch(`https://api.tomtom.com/search/2/search/${this.query}.json?key=${this.apiKey}&typeahead=true&limit=5`)
                .then(response => response.json())
                .then(data => {
                    this.suggestions = data.results;
                    this.selectedIndex = -1;
                })
                .catch(error => console.error('Errore:', error));
        } else {
            this.suggestions = [];
        }
    },
    chooseSuggestion(suggestion) {
        console.log('Suggestion chosen:', suggestion);
        this.query = suggestion.address.freeformAddress;
        this.latitude = suggestion.position.lat;
        this.longitude = suggestion.position.lon;
        this.suggestions = [];


        this.$emit('update:latitude', this.latitude);
        this.$emit('update:longitude', this.longitude);
    },
    moveDown() {
        if (this.selectedIndex < this.suggestions.length - 1) {
            this.selectedIndex++;
        }
    },
    moveUp() {
        if (this.selectedIndex > 0) {
            this.selectedIndex--;
        }
    },
    selectSuggestion() {
        if (this.selectedIndex > -1) {
            this.chooseSuggestion(this.suggestions[this.selectedIndex]);
        }
    },


    search() {
        if (localStorage.getItem("latitude") && localStorage.getItem("longitude") ) {
            this.store.latitude = localStorage.getItem("latitude");
            this.store.longitude = localStorage.getItem("longitude");

            localStorage.setItem("latitude","");
            localStorage.setItem("longitude","");
        }
        
        
        // visualizzare dati in console
        console.log('Latitude:', this.store.latitude);
        console.log('Longitude:', this.store.longitude);
        //Esegui la ricerca sul backend
        axios.get('http://127.0.0.1:8000/api/flats/search', {
            params: {
                latitude: this.store.latitude,
                longitude: this.store.longitude,
                range: 100,
            }
        })
            .then(response => {
                this.store.flatArray = response.data.results;
                console.log(response.data.results);
                this.setMap();
                //faccio chiamta api al nostro backEnd
            })
            .catch(error => {
                console.error('Errore:', error);
            });
    },

    setMap() {
        console.log('ciao');
        const position = {
            lat: store.latitude,
            lon: store.longitude
        }

        var map = tt.map({//Setting coordinates to map in View
            key: 'bKZHQIbuOQ0b5IXmQXQ2FTUOUR3u0a26',
            container: 'map',
            center: position,
            zoom: 5
        });

        store.flatArray.forEach((currFlat) => {
            const position = {
                lat: currFlat.latitude,
                lon: currFlat.longitude,
            }
            console.log(position);
            var marker = new tt.Marker().setLngLat(position).addTo(map)
        })

        return map;
    }
},

created() {
    document.addEventListener("DOMContentLoaded", this.search)
}
};
</script>

<template>
    <header>
        <div class="hero flex-column d-flex justify-content-center align-items-center">
            <div class="mt-5">
                <h1 class="title_hero text-center"><span>Scopri la tua</span> prossima meta</h1>
            </div>
            <AppSearchBoxAR />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use"../scss/partials/_variables" as*;

.orange {
    color: $secondary-color;
}

.hero {
    background-size: cover;
    background-image: url("../../public/img/modern-house.jpg");
    background-repeat: no-repeat;
    min-height: 700px;
    margin-top: 112px;

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

    .search_button {
        position: absolute;
        bottom: 25%;
        right: -120px;
    }
}
</style>
