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

                const requestOptions = {
                    method: "POST",
                    redirect: "follow",
                };

                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        const resp = JSON.parse(this.responseText);
                        console.log(resp);
                        this.token = resp.access_token;
                        this.token = this.token.split('|')[1];
                        console.log(this.token);
                        // WARNING: For GET requests, body is set to null by browsers.
                        
                        var newUrl = new URL('http://127.0.0.1:8000/api/user');
                        var params1 = {
                            Authorization: 'Bearer ' + this.token
                        }
                        newUrl.search = new URLSearchParams(params1).toString();
                        console.log(newUrl.href);

                        var xhr = new XMLHttpRequest();
                        xhr.withCredentials = true;

                        xhr.addEventListener("readystatechange", function () {
                            if (this.readyState === 4) {
                                console.log(this.responseText);
                            }
                        });

                        xhr.open("GET", newUrl.href);
                        // WARNING: Cookies will be stripped away by the browser before sending the request.
                        xhr.setRequestHeader("Cookie", "XSRF-TOKEN=eyJpdiI6IkhtWjh1WUtLUkFoaks0L0FzQ1phMFE9PSIsInZhbHVlIjoickdTUW14ckhtTG5abU9ITzdENjM4c1BkM1oydEtCdTY3MU1KMVdDT2xmbUpWR214R1UrYmNFeXJ0Z0xZZFBHM1RBMTEwS1l0Z3VKelRZWkNacE9EaHJEU24rU2doUUpBQmlzbVUxL2FtNWdDbzI2SnVNZFVHNXhBaituUFdMOVUiLCJtYWMiOiI3YTZkNmIzNGM2ZGU3NTIyMTkyNzEyNGE0M2I2Zjc2ODQ1ZTgyZjIwM2Q3ZTFhMzhlZTVmYmNhOTVhNmViMWVlIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6Im1kUDhqMXM5NjBEVmtMNkxHN2hnUGc9PSIsInZhbHVlIjoiL0VhWjhVenIvbGd4U1gzQVBjdjg2d2dwc014dnNUTW90djNFRWsvYjVSd21FVmZObGlpNHJHVTBBM0JsNzQ3UE10THIzeFVxNGFOYkY2d0RnOTJ5M0REQlFuczdvWXpyZm5WT0k2UlBmUFMxVzRVanBJMWZiRStqYkpYMjQ1VEciLCJtYWMiOiJmNGVjOTI0NmZhZjVmZjUyYTM4MzRkMDc5OWVlNGQzMzAxMjUyNGEwNDBmN2JmMmQxOGVhZjc0ZjQxNzA5MTVkIiwidGFnIjoiIn0%3D");

                        xhr.send();
                    }
                });

                xhr.open("POST", "http://127.0.0.1:8000/api/login?email=ryampeguero%40gmail.com&password=12345678");

                xhr.send();
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
.test {
    min-height: 100vh;
    margin-top: 200px;
}
</style>