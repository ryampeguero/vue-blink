<script>
import axios from 'axios';

export default {
    data() {
        return {
            flat: [],
            isLoading: false,
            imgUrlBase: "http://127.0.0.1:8000/storage",
            messageForUser: "",
            classuser: "",
        };
    },
    created() {
        const slug = this.$route.params.slug;
        console.log(slug);
        axios.get(`http://127.0.0.1:8000/api/info/${slug}`).then((resp) => {
            console.log(resp.data);
            this.flat = resp.data;
            this.isLoading = true;

        });
    },
    methods: {
        sendMessage() {
            console.log(this.message);
            axios.post(`http://127.0.0.1:8000/api/send-message`, {

                message: this.message,
                id_flat: this.flat.id,
                email: this.emailform,

            })
                .then((response) => {
                    console.log('Message sent successfully:', response.data);
                    this.messageForUser = "Messaggio inviato correttamente.";
                    this.classuser = "alert-success";
                })
                .catch((error) => {
                    console.error('Error sending message:', error);
                    this.messageForUser = "Messaggio non inviato.";
                    this.classuser = "alert-danger";
                });
            this.message = '';
            this.emailform = '';

        }
    }

};
</script>

<template>
    <div class="info_card_container">
        <div v-if="isLoading" class="info_card d-md-flex d-block  ms_card_img">
            <div class="">
                <img class="img_container"
                    :src="flat.img_path ? `${imgUrlBase}/${flat.img_path}` : `../public/img/placeholder-img.png`"
                    alt="">
            </div>
            <div class="p-3 ">
                <div class="ms_card">
                    <input type="hidden" :value="`{{ flat.slug }}`">
                    <h1>{{ flat.name }}</h1>
                    <h3>Host: <span>{{ flat.user.name }}</span></h3>
                    <h4><i class="fa-solid fa-person-shelter"></i> Stanze: {{ flat.rooms }}</h4>
                    <h4><i class="fa-solid fa-bed"></i> Letti: {{ flat.beds }}</h4>
                    <h4><i class="fa-solid fa-bath"></i> Bagni: {{ flat.bathrooms }}</h4>
                </div>

                <form @submit.prevent="sendMessage" class="ms_card p-3 mt-3">
                    <div v-if="messageForUser" class="alert alert-primary" :class="classuser" role="alert">
                        {{ messageForUser }}
                    </div>

                    <div class="mt-3 d-flex flex-column ">
                        <label for="mex_form" class="form-label">Lascia un messaggio all'Host</label>
                        <textarea v-model="message" class="ms_card" name="mex-form" id="mex_form" cols="30" rows="3"></textarea>
                    </div>
                    <div class="mt-3 d-flex flex-column">
                        <label for="emailform" class="form-label">Inserisci la tua email</label>
                        <input type="email" v-model="emailform" class="ms_card" name="emailform" id="emailform" cols="30"
                            rows="3"></input>
                    </div>
                    <div class="d-flex justify-content-end mt-3">
                        <button class="ms_button" type="submit">Invia</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>


.info_card_container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../../public/img/background_login.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;

}

.img_container {
    object-fit: cover;
    border-radius: 1.0rem;
    height: 100%;
    width: 100%;


}

.info_card {
    display: flex;
}
</style>