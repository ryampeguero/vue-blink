<script>
import { store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            imgUrlBase: 'http://127.0.0.1:8000/storage',
            flats: "",
            flatId:'',
        };

    },
    props: {
        isPremium: Boolean,
        isHome: Boolean
    },
    created() {
        console.log("Sono premium", this.isPremium);

    },

    methods: {
        showArray() {

            if (this.store.flatsLoaded) {
                console.log("array appart", this.store.flatArray);
            }
        },
    },


}

</script>

<template>

    <div v-if="isPremium == false" v-for="flat in isPremium ? store.flatArrayPremium : store.flatArray"
        class="col-sm-12 mb-5 col-md-12 col-lg-5 ms_backC_tertiary p-0 ms_border" >
        <router-link :to="{ name: 'single-card', params: { slug: flat.slug } }"
            class="ms_card_img mt-5 text-decoration-none ">
            <input id="flatId" type="hidden" name="" :value="flat.id">
            <img class="img_container"
                :src="flat.img_path ? `${imgUrlBase}/${flat.img_path}` : `public/img/placeholder-img.png`" alt="">
            <div class="p-3">
                <input type="hidden" :value="`{{ flat.slug }}`">
                <h1>{{ flat.name }}</h1>
                <h4><i class="fa-solid fa-person-shelter"></i> Stanze: {{ flat.rooms }}</h4>
                <h4><i class="fa-solid fa-bed"></i> Letti: {{ flat.beds }}</h4>
                <h4><i class="fa-solid fa-bath"></i> Bagni: {{ flat.bathrooms }}</h4>
            </div>
        </router-link>

    </div>
    <div v-else-if="isHome==false" v-for="flat in isPremium ? store.flatArrayPremium : store.flatArray" :class="{
        'border_basic': flat.receipts[0].plan_id == 1,
        'border_intermade': flat.receipts[0].plan_id == 2,
        'border_premium': flat.receipts[0].plan_id == 3
    }" class="col-sm-12 mb-5 col-md-12 col-lg-5 ms_backC_tertiary p-0 ms_border" >

        <router-link :to="{ name: 'single-card', params: { slug: flat.slug } }"
            class="ms_card_img mt-5 text-decoration-none">

            <img class="img_container"
                :src="flat.img_path ? `${imgUrlBase}/${flat.img_path}` : `public/img/placeholder-img.png`" alt="">
            <div class="p-3 p-4">
                <input type="hidden" :value="`{{ flat.slug }}`">
                <h1 class="title_flat">{{ flat.name }}</h1>
                <h4><i class="fa-solid fa-person-shelter"></i> Stanze: {{ flat.rooms }}</h4>
                <h4><i class="fa-solid fa-bed"></i> Letti: {{ flat.beds }}</h4>
                <h4><i class="fa-solid fa-bath"></i> Bagni: {{ flat.bathrooms }}</h4>
            </div>
        </router-link>
    </div>

    <div v-else v-for="flat in isPremium ? store.flatArrayPremium : store.flatArray"  class="col-sm-12 mb-5 col-md-8 col-lg-3 ms_backC_tertiary p-0 ms_border border_premium">
        <router-link :to="{ name: 'single-card', params: { slug: flat.slug } }"
            class="ms_card_img mt-5 text-decoration-none">
            <img class="img_container"
                :src="flat.img_path ? `${imgUrlBase}/${flat.img_path}` : `public/img/placeholder-img.png`" alt="">
            <div class="p-3 p-4">
                <input type="hidden" :value="`{{ flat.slug }}`">
                <h1 class="title_flat">{{ flat.name }}</h1>
                <h4><i class="fa-solid fa-person-shelter"></i> Stanze: {{ flat.rooms }}</h4>
                <h4><i class="fa-solid fa-bed"></i> Letti: {{ flat.beds }}</h4>
                <h4><i class="fa-solid fa-bath"></i> Bagni: {{ flat.bathrooms }}</h4>
            </div>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.img_container {
    object-fit: cover;
    border-radius: 1.0rem;
    max-height: 100%;
    max-width: 100%;
    aspect-ratio: 1;
}

.border_premium{
    box-shadow: rgb(255, 104, 39, 0.4) 0px 5px,  rgb(255, 104, 39, 0.3) 0px 10px, rgb(255, 104, 39, 0.2) 0px 15px, rgb(255, 104, 39, 0.1) 0px 20px, rgb(255, 104, 39, 0.05) 0px 25px;
}

.border_intermade {
    box-shadow: rgb(26, 36, 50, 0.4) 0px 5px,  rgb(26, 36, 50, 0.3) 0px 10px, rgb(26, 36, 50, 0.2) 0px 15px, rgb(26, 36, 50, 0.1) 0px 20px, rgb(26, 36, 50, 0.05) 0px 25px;
}

.border_basic {
    box-shadow: rgb(223, 234, 248, 0.4) 0px 5px,  rgb(223, 234, 248, 0.3) 0px 10px, rgb(223, 234, 248, 0.2) 0px 15px, rgb(223, 234, 248, 0.1) 0px 20px, rgb(223, 234, 248, 0.05) 0px 25px;
}



.title_flat {
    font-size: 2rem;
}

.ms_card_img {
    border-radius: 1.0rem;
    padding: 0;
    margin: 0;
    max-width: 400px;
}
</style>
