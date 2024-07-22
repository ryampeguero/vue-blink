<script>
import axios from "axios";
import { store } from '../store';
export default {
    data() {
        return {
            store,
            email: '',
            password: '',
            ricorda: false,
            emailErrore: '',
            passwordErrore: '',
            token: '',
            id: '',
            name: '',
            surname: '',
            date_of_birth: '',
            img_path: '',
            created_at: '',
            updated_at: '',
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

                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                var loginUrl = new URL('http://127.0.0.1:8000/api/login');
                var params1 = {
                    email: this.email,
                    password: this.password
                }
                loginUrl.search = new URLSearchParams(params1).toString();

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        const resp = JSON.parse(this.responseText);
                        console.log(resp);
                        this.token = resp.access_token;
                        this.token = this.token.split('|')[1];
                        console.log(this.token);
                        // WARNING: For GET requests, body is set to null by browsers.

                        var xhr = new XMLHttpRequest();
                        xhr.withCredentials = true;

                        xhr.addEventListener("readystatechange", function () {
                            if (this.readyState === 4) {
                                console.log(this.responseText);
                                const responseObject = JSON.parse(xhr.responseText);

                                const { id, name, surname, email, date_of_birth, img_path, created_at, updated_at } = responseObject;

                                this.store.id = id;
                                this.store.name = name;
                                this.store.surname = surname;
                                this.store.date_of_birth = date_of_birth;
                                this.store.img_path = img_path;
                                this.store.created_at = created_at;
                                this.store.updated_at = updated_at;
                                this.store.password = this.password;
                            }
                        });

                        xhr.open("GET", 'http://127.0.0.1:8000/api/user');
                        // WARNING: Cookies will be stripped away by the browser before sending the request.
                        // xhr.setRequestHeader("Cookie", "XSRF-TOKEN=eyJpdiI6IkhtWjh1WUtLUkFoaks0L0FzQ1phMFE9PSIsInZhbHVlIjoickdTUW14ckhtTG5abU9ITzdENjM4c1BkM1oydEtCdTY3MU1KMVdDT2xmbUpWR214R1UrYmNFeXJ0Z0xZZFBHM1RBMTEwS1l0Z3VKelRZWkNacE9EaHJEU24rU2doUUpBQmlzbVUxL2FtNWdDbzI2SnVNZFVHNXhBaituUFdMOVUiLCJtYWMiOiI3YTZkNmIzNGM2ZGU3NTIyMTkyNzEyNGE0M2I2Zjc2ODQ1ZTgyZjIwM2Q3ZTFhMzhlZTVmYmNhOTVhNmViMWVlIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6Im1kUDhqMXM5NjBEVmtMNkxHN2hnUGc9PSIsInZhbHVlIjoiL0VhWjhVenIvbGd4U1gzQVBjdjg2d2dwc014dnNUTW90djNFRWsvYjVSd21FVmZObGlpNHJHVTBBM0JsNzQ3UE10THIzeFVxNGFOYkY2d0RnOTJ5M0REQlFuczdvWXpyZm5WT0k2UlBmUFMxVzRVanBJMWZiRStqYkpYMjQ1VEciLCJtYWMiOiJmNGVjOTI0NmZhZjVmZjUyYTM4MzRkMDc5OWVlNGQzMzAxMjUyNGEwNDBmN2JmMmQxOGVhZjc0ZjQxNzA5MTVkIiwidGFnIjoiIn0%3D");
                        xhr.setRequestHeader('Accept', '*/*');

                        xhr.setRequestHeader('Authorization', resp.token_type + " " + this.token);
                        xhr.send();
                    }
                });

                xhr.open("POST", loginUrl);

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