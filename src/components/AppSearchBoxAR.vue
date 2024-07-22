<script>
import axios from 'axios';
import { store } from '../store';
import tt from '@tomtom-international/web-sdk-maps';

import AppMap from './AppMap.vue';
export default {
    components: {
        AppMap,
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
            this.store.latitude = suggestion.position.lat;
            this.store.longitude = suggestion.position.lon;
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
            // visualizzare dati in console
            console.log('Latitude:', this.store.latitude);
            console.log('Longitude:', this.store.longitude);

            const roomsNumber = document.getElementById('rooms').value > 0 ? document.getElementById('rooms').value : 1;
            const bathsNumber = document.getElementById('bathrooms').value > 0 ? document.getElementById('rooms').value : 1;


            console.log("stanze", roomsNumber);
            console.log("bagni", bathsNumber);

            //Esegui la ricerca sul backend
            axios.get('http://127.0.0.1:8000/api/flats/searchAR', {
                params: {
                    latitude: this.store.latitude,
                    longitude: this.store.longitude,
                    rooms: roomsNumber,
                    bathrooms: bathsNumber,
                    range: 0
                }
            })
                .then(response => {
                    console.log(response.data.results);
                    //faccio chiamta api al nostro backEnd
                    this.store.flatArray = response.data.results;
                    console.log(response.data.results);
                    this.setMap();

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
                zoom: 12
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
};

</script>

<template>

    <div class="ms_search_bar mt-5 px-5">
        <div class=" d-flex gap-5 align-items-center ">
            <div>
                <div class="">
                    <label class="text_searchbar ps-3" for="address">Dove<span class="orange">*</span></label>

                    <input v-model="query" @input="fetchSuggestions" @keydown.down="moveDown" @keydown.up="moveUp"
                        @keydown.enter="selectSuggestion" placeholder="Dove vuoi soggiornare?" value="" name="address"
                        class="form-control ms_search_bar" type="text" id="address" autocomplete="off">

                    <ul v-if="suggestions.length" id="suggestions">
                        <li v-for="(suggestion, index) in suggestions" :key="index"
                            :class="{ selected: index === selectedIndex }" @click="chooseSuggestion(suggestion)">
                            {{ suggestion.address.freeformAddress }}
                        </li>
                    </ul>

                    <input type="hidden" name="latitude" :value="latitude">
                    <input type="hidden" name="longitude" :value="longitude">
                </div>
                <div>
                    <div class="d-flex gap-3">
                        <div class="">
                            <label class="text_searchbar ps-3" for="rooms">Stanze</label>
                            <input id="rooms" name="rooms" class="form-control ms_search_bar_in" type="number" value=""
                                placeholder="Stanze">
                        </div>
                        <div class="">
                            <label class="text_searchbar ps-3" for="bathrooms">Bagni</label>
                            <input id="bathrooms" name="bathrooms" class="form-control ms_search_bar_in" type="number"
                                value="" placeholder="Bagni">
                        </div>
                    </div>
                </div>
            </div>
            <div class="search_button">
                <button @click="search" class="ms_button search_ico " type="submit">
                    <img class="btn_search" src="../../public/Icons/search.svg" alt="">
                </button>
            </div>
        </div>
    </div>
    <AppMap class="mt-5" />
</template>

<style scoped lang="scss">
@use"../scss/partials/_variables" as*;


.search_ico {
    aspect-ratio: 1;
    border-radius: 50%;
}

.btn_search {
    height: 40px;
    width: 40px;
    border-radius: 1.5rem;
}

#address {
    padding: 10px;
    font-size: 16px;
}

#suggestions {
    list-style-type: none;
    padding: 0;
    border: 1px solid #ccc;
    position: absolute;
    background-color: #fff;
    overflow-y: auto;
    z-index: 1000;
}

#suggestions li {
    padding: 10px;
    cursor: pointer;
}

#suggestions li:hover,
#suggestions li.selected {
    background-color: #f0f0f0;
}
</style>