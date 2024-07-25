import { reactive } from "vue";
export const store = reactive({
    token: "",
    flatArray: [],
    token: "",
    services: [
        { id: 1, name: "Wi-Fi", icon: "fa-wifi" },

        { id: 2, name: "Pulizia settimanale", icon: "fa-broom" },

        { id: 3, name: "Aria condizionata", icon: "fa-snowflake" },

        { id: 4, name: "Lavanderia", icon: "fa-tshirt" },

        { id: 5, name: "Piscina", icon: "fa-swimmer" },

        { id: 6, name: "Palestra", icon: "fa-dumbbell" },

        { id: 7, name: "Parcheggio", icon: "fa-parking" },

        { id: 8, name: "TV via cavo", icon: "fa-tv" },

        { id: 9, name: "Animali ammessi", icon: "fa-paw" },

        { id: 10, name: "Servizio di portineria", icon: "fa-concierge-bell" }
    ],
    checkedIds: [],
    flatsLoaded: false,
    latitude: "",
    longitude: "",
    email: "",
    password: "",
})


