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
            toke: [],
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
                // Esegui il login
                const params = {
                    email: this.email,
                    password: this.password,
                };

                axios
                    .post('http://127.0.0.1:8000/api/login', params)
                    .then((resp) => {

                        this.token = resp.data.access_token;
                        console.log(this.token);
                        localStorage.setItem('authToken', this.token);
                        this.$router.push('/profile');
                    })
                    .catch((error) => {
                        console.error(error);
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
    <div class="container mt-5 test">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mt-5">
                    <div class="card-header">Accedi</div>
                    <div class="card-body">
                        <form @submit.prevent="gestisciInvio">
                            <div class="mb-4 row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Indirizzo
                                    E-Mail</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" v-model="email"
                                        :class="{ 'is-invalid': emailErrore }" required autocomplete="email"
                                        autofocus />
                                    <span v-if="emailErrore" class="invalid-feedback" role="alert">
                                        <strong>{{ emailErrore }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="mb-4 row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" v-model="password"
                                        :class="{ 'is-invalid': passwordErrore }" required
                                        autocomplete="current-password" />
                                    <span v-if="passwordErrore" class="invalid-feedback" role="alert">
                                        <strong>{{ passwordErrore }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="mb-4 row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" v-model="ricorda"
                                            id="remember" />
                                        <label class="form-check-label" for="remember">Ricordami</label>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-4 row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">Accedi</button>
                                    <a class="btn btn-link" href="#" @click.prevent="passwordDimenticata">
                                        Hai dimenticato la password?
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.test{
    min-height: 100vh;
    margin-top: 200px;
}
</style>    