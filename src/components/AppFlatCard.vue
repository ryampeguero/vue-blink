<script>
import { store } from '../store';


export default {
    data() {
        return {
            store,
            imgUrlBase: 'http://127.0.0.1:8000/storage',
        };
    },
}

</script>

<template>

                <div class="col-3 ms_card_img " v-for="flat in store.flatArray">

                <img class="img_container" :src="flat.img_path ? `${imgUrlBase}/${flat.img_path}`:`public/img/placeholder-img.png` " alt="">
                <div class="p-3">
                    <h1>{{ flat.name }}</h1>
                    <h3>Host: <span>{{ flat.user.name }}</span></h3>
                    <h4><i class="fa-solid fa-person-shelter"></i> Stanze: {{ flat.rooms }}</h4>
                    <h4><i class="fa-solid fa-bed"></i> Bagni: {{ flat.beds }}</h4>
                    <h4><i class="fa-solid fa-bath"></i> Letti: {{ flat.bathrooms }}</h4>
                </div>

                </div>
</template>

<style lang="scss" scoped>

.img_container {
    object-fit: fill;
    border-radius: 1.0rem;
    max-height: 100%;
    max-width: 100%;
}

</style>
