<script>
import axios from 'axios';
import { store } from '../store';

export default {
    components: {

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

            //Esegui la ricerca sul backend
            axios.get('http://127.0.0.1:8000/api/flats/search', {
                params: {
                    latitude: this.store.latitude,
                    longitude: this.store.longitude,
                }
            })
                .then(response => {
                    console.log(response.data.results);
                    this.searchPremium = true;

                })
                .catch(error => {
                    console.error('Errore:', error);
                });
        },
    },
};

</script>

<template>

    <div>
        <input v-model="query" @input="fetchSuggestions" @keydown.down="moveDown" @keydown.up="moveUp"
            @keydown.enter="selectSuggestion" placeholder="Dove vuoi soggiornare?" value="" name="address"
            class="form-control ms_search_bar ms-2" type="text" id="address" autocomplete="off">

        <ul v-if="suggestions.length" id="suggestions">
            <li v-for="(suggestion, index) in suggestions" :key="index" :class="{ selected: index === selectedIndex }"
                @click="chooseSuggestion(suggestion)">
                {{ suggestion.address.freeformAddress }}
            </li>
        </ul>

        <input type="hidden" name="latitude" :value="latitude">
        <input type="hidden" name="longitude" :value="longitude">
    </div>




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