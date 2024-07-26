<script>
import axios from "axios";
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
            email: '',
            password: '',
            passwordControl: '',
            ricorda: false,
            emailErrore: '',
            passwordErrore: '',
            token: '',
            name: "",
        };
    },
    methods: {
        gestisciInvio() {
            this.emailErrore = '';
            this.passwordErrore = '';

            // Validazione del form
            if (!this.email) {
                this.emailErrore = "L'email è obbligatoria";
            }
            if (!this.password) {
                this.passwordErrore = 'La password è obbligatoria';
            }
            if (this.email && this.password) {
                console.log(this.email);
                console.log(this.password);
                const body = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.passwordControl
                }
                axios.post('http://127.0.0.1:8000/api/register', body).then((resp) => {
                    console.log(resp.data.access_token);
                    this.token = resp.data.access_token;
                    this.token = this.token.split('|')[1];
                    console.log(this.token);

                    this.store.email = this.email;
                    this.store.token = this.token;
                    this.store.password = this.password;
                    this.store.name = this.name;
                    window.location.replace("http://127.0.0.1:8000/admin");
                })
            }

        },
        passwordDimenticata() {
            // Gestione della password dimenticata
            console.log('Password dimenticata cliccata');


        }
    }


};
</script>

<template>

    <form @submit.prevent="gestisciInvio" novalidate>
        <div class="ms_card_out mt-5 container d-flex">
            <div class="row">

                <div class="col-sm-12 col-md-6">
                    <div class="box p-3">
                        <img class="box ms_border_inner" src="../../public/img/login_img.png" alt="">
                    </div>
                </div>

                <div class="col-md-6 col-sm-12 p-3">
                    <div class="d-flex align-items-center mb-3">
                        <div class="ico">
                            <img src="../../public/Icons/blink-ico.svg" alt="">
                        </div>
                        <div>
                            <h3 class="mb-0 ms-2">Registrazione</h3>
                        </div>
                    </div>
                    <div class="mb-4 row-column">
                        <div class="">
                            <div>
                                <label class="col-form-label text-md-right" for="Name">Nome</label>
                                <input v-model="name" class="form-control" type="text">
                            </div>
                            <div>
                                <label class="col-form-label text-md-right" for="LastName">Cognome</label>
                                <input v-model="lastname" class="form-control" type="text">
                            </div>
                            <label for="email" class="col-form-label text-md-right">E-Mail</label>
                            <div class="">
                                <input id="email" type="email" class="form-control" v-model="email"
                                    :class="{ 'is-invalid': emailErrore }" required autofocus autocomplete="off" />
                                <span v-if="emailErrore" class="invalid-feedback" role="alert">
                                    <strong>{{ emailErrore }}</strong>
                                </span>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                            <div class="">
                                <input id="password" type="password" class="form-control" v-model="password"
                                    :class="{ 'is-invalid': passwordErrore }" required autocomplete="off" />
                                <span v-if="passwordErrore" class="invalid-feedback" role="alert">
                                    <strong>{{ passwordErrore }}</strong>
                                </span>
                            </div>
                            <label for="password" class="col-md-4 col-form-label text-md-right">Ancora una volta</label>
                            <div class="">
                                <input id="password" type="password" class="form-control" v-model="passwordControl"
                                    :class="{ 'is-invalid': passwordErrore }" required />
                                <span v-if="passwordErrore" class="invalid-feedback" role="alert">
                                    <strong>{{ passwordErrore }}</strong>
                                </span>
                            </div>
                        </div>

                        <div class="mb-4">
                        </div>
                        <div class="mb-4 mb-0">
                            <div class="d-flex flex-column align-items-end">
                                <button type="submit" class="ms_button" @click="callRegisterApi">Registrati</button>
                                <a class="btn btn-link" href="#" @click.prevent="passwordDimenticata">
                                    Hai dimenticato la password?
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<style lang="scss" scoped>
.ico {
    width: 15%;
}

.box {
    max-width: 600px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ms_card_out {
    background-color: white !important;

}
</style>