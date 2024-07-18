<script>
import AppSearchBox from './AppSearchBox.vue';

export default {
    components: {
        AppSearchBox,
    },
    data() {
        return {

        };

        
    },

    methods: {
        search() {
            // visualizzare dati in console
            console.log('Latitude:', this.latitude);
            console.log('Longitude:', this.longitude);

            //Esegui la ricerca sul backend
            axios.get('http://127.0.0.1:8000/api/flats/search', {
                params: {
                    latitude: this.latitude,
                    longitude: this.longitude,
                }
            })
                .then(response => {
                    console.log(response.data.results);
                    //faccio chiamta api al nostro backEnd
                    
                })
                .catch(error => {
                    console.error('Errore:', error);
                });
        },
    }
};
</script>

<template>
    <header>
        <div class="hero flex-column d-flex justify-content-center align-items-center">
            <div class="">
                <h1 class="title_hero">Scopri la tua prossima meta</h1>
            </div>
            <div class="ms_search_bar mt-5 px-5">
                <div>
                    <div class=" d-flex gap-5 align-items-center ">
                        <div class="">
                            <label class="text_searchbar ps-3" for="">Dove</label>
                            <AppSearchBox />
                        </div>
                        <div>
                            <label class="text_searchbar ps-3" for="">Quanti</label>
                            <div class="d-flex gap-3">
                                <input placeholder="N° di stanze" value="" name="address"
                                    class="form-control ms_search_bar_in" type="text" id="address" autocomplete="off">
                                <input placeholder="N° di bagni" value="" name="address"
                                    class="form-control ms_search_bar_in" type="text" id="address" autocomplete="off">
                                <input placeholder="N° di letti" value="" name="address"
                                    class="form-control ms_search_bar_in" type="text" id="address" autocomplete="off">

                                    <input placeholder="N° metri quadri" value="" name="address"
                                    class="form-control ms_search_bar_in" type="text" id="address" autocomplete="off">
                            </div>
                        </div>
                    </div>

                    <div class="search_button">
                        <button class="ms_button search_ico me-4" type="submit"><img class="btn_search"
                                src="../../public/Icons/search.svg" alt=""></button>
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

    .search_button {
        position: absolute;
        bottom: 25%;
        right: -120px;
    }
}
</style>
