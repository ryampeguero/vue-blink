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
    methods: {
        sendMessage() {
            console.log(this.message);
            axios.post(`http://127.0.0.1:8000/api/send-message`, {

                message: this.message,
                flat_id: this.flat.id,
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
                }).finally(() => {
                });

            this.message = '';
            this.emailform = '';
            this.messageForUser = "";
        },

        infoUser() {
            const user = JSON.parse(localStorage.getItem('user'));
            console.log(user);
            if (user && user.email) {
                this.emailform = user.email;
            }
        },

        scrollToTOP() {
            window.scrollTo(0, 0);
        },

        sendIpAddress(id) {
            // const id = document.getElementById('flatId').value;
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

    },

    created() {
        this.scrollToTOP();
        this.infoUser();
        const slug = this.$route.params.slug;
        console.log(slug);
        axios.get(`http://127.0.0.1:8000/api/info/${slug}`).then((resp) => {
            console.log(resp.data);
            this.flat = resp.data;
            this.isLoading = true;
            this.sendIpAddress(resp.data.id);
        });
    },

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
                    <input id="flatId" type="hidden" name="" :value="flat.id">
                    <h1>{{ flat.name }}</h1>
                    <h3>Host: <span>{{ flat.user.name }}</span></h3>
                    <h4><i class="fa-solid fa-person-shelter"></i> Stanze: {{ flat.rooms }}</h4>
                    <h4><i class="fa-solid fa-bed"></i> Letti: {{ flat.beds }}</h4>
                    <h4><i class="fa-solid fa-bath"></i> Bagni: {{ flat.bathrooms }}</h4>

                    <h3>Servizi:</h3>
                    <div class="d-flex gap-3">
                        <div v-for="service in flat.services">
                            <h4><i class="fa-solid" :class="service.icon"></i></h4>
                        </div>
                    </div>

                </div>

                <form @submit.prevent="sendMessage" class="ms_card p-3 mt-3">
                    <div v-if="messageForUser" class="alert alert-primary" :class="classuser" role="alert">
                        {{ messageForUser }}
                    </div>

                    <div class="mt-3 d-flex flex-column ">
                        <label for="mex_form" class="form-label">Lascia un messaggio all'Host</label>
                        <textarea v-model="message" class="ms_card" name="mex-form" id="mex_form" cols="30"
                            rows="3"></textarea>
                    </div>
                    <div class="mt-3 d-flex flex-column">
                        <label for="emailform" class="form-label">Inserisci la tua email</label>
                        <input type="email" v-model="emailform" class="ms_card" name="emailform" id="emailform"
                            cols="30" rows="3">{{ this.email }}</input>
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

    @media screen and (max-width:400px) {
        margin-bottom: 300px;
    }
}
</style>