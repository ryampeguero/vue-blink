<script>
import { store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            imgUrlBase: 'http://127.0.0.1:8000/storage',
        };
    },
    computed() {
    },

    methods: {
        showArray() {
            if (store.flatsLoaded)
                console.log("array appart", store.flatArray);
        },
        sendIpAddress(id) {
            console.log(id);
            axios.get("https://api.ipify.org?format=json")
                .then((response) => {
                    const ip = response.data.ip;
                    axios.post('http://127.0.0.1:8000/api/stats/view', {
                        ip: ip,
                        flatId: id
                    }).then((resp) => {
                        console.log(resp);
                    })
                })
                .catch((error) => console.error(error));
        }

    }

}

</script>

<template>
    <div v-for="flat in store.flatArray" class="col-3" @click="sendIpAddress(flat.id)">
        <router-link :to="{ name: 'single-card', params: { slug: flat.slug } }"
            class="ms_card_img mt-5 text-decoration-none">
            <img class="img_container"
                :src="flat.img_path ? `${imgUrlBase}/${flat.img_path}` : `public/img/placeholder-img.png`" alt="">
            <div class="p-3">
                <input type="hidden" :value="`{{ flat.slug }}`">
                <h1>{{ flat.name }}</h1>
                <!-- <h3>Host: <span>{{ flat.user.name }}</span></h3> -->
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

.ms_card_img {
    border-radius: 1.0rem;
    padding: 0;
    margin: 0;
    max-width: 400px;
}
</style>
