<script>
import axios from "axios";

export default {
    data() {
        return {
            email: '',
            password: '',
            ricorda: false,
            emailErrore: '',
            passwordErrore: '',
            token: '',
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
                const params = {
                    email: this.email,
                    password: this.password,
                };
                const form = new FormData();
                form.append('email', this.email);
                form.append('password', this.password);
                console.log(this.email);

                axios
                    .post('http://127.0.0.1:8000/api/login', form, {
                        headers: { "Accept": "application/json" },
                    })
                    .then((resp) => {
                        // Salva il token nel localStorage
                        this.token = resp.data.access_token;
                        console.log(this.token);
                        localStorage.setItem('authToken', this.token);


                        axios.get('http://127.0.0.1:8000/api/user', {
                            headers: {
                                Authorization: `Bearer ${this.token}`
                            }
                        })
                            .then(response => {
                                console.log('Risposta dal server:', response.data);
                                // Reindirizza all'area protetta dell'applicazione
                                this.$router.push('/profile');
                            })
                            .catch(error => {
                                console.error('Errore durante la richiesta protetta:', error);
                                // Gestisci eventuali errori della richiesta protetta
                            });
                    })
                    .catch((error) => {
                        console.error('Errore durante il login:', error);
                        if (error.response && error.response.data) {
                            const errors = error.response.data.errors;
                            if (errors.email) {
                                this.emailErrore = errors.email[0];
                            }
                            if (errors.password) {
                                this.passwordErrore = errors.password[0];
                            }
                        }
                    });
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

    <form @submit.prevent="gestisciInvio">
        <div class="ms_card_out mt-5 container d-flex">
            <div class="row">
                <div class="col-7 p-3 ps-4">
                    <div class="d-flex align-items-center mb-3">
                        <div class="ico">
                            <img src="../../public/Icons/blink-ico.svg" alt="">
                        </div>
                        <div>
                            <h3 class="mb-0 ms-2">Login</h3>
                        </div>
                    </div>
                    <div class="mb-4 row-column">
                        <div class="">
                            <label for="email" class="col-form-label text-md-right">E-Mail</label>
                            <div class="">
                                <input id="email" type="email" class="form-control" v-model="email"
                                    :class="{ 'is-invalid': emailErrore }" required autocomplete="email" autofocus />
                                <span v-if="emailErrore" class="invalid-feedback" role="alert">
                                    <strong>{{ emailErrore }}</strong>
                                </span>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                            <div class="">
                                <input id="password" type="password" class="form-control" v-model="password"
                                    :class="{ 'is-invalid': passwordErrore }" required
                                    autocomplete="current-password" />
                                <span v-if="passwordErrore" class="invalid-feedback" role="alert">
                                    <strong>{{ passwordErrore }}</strong>
                                </span>
                            </div>
                        </div>

                        <div class="mb-4">
                            <div class="">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" v-model="ricorda" id="remember" />
                                    <label class="form-check-label" for="remember">Ricordami</label>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4 mb-0">
                            <div class="d-flex flex-column align-items-end">
                                <button type="submit" class="ms_button">Accedi</button>
                                <a class="btn btn-link" href="#" @click.prevent="passwordDimenticata">
                                    Hai dimenticato la password?
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="box p-3">
                        <img class="box ms_border_inner" src="../../public/img/login_img.png" alt="">
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
</style>