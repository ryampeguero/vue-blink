<script>
import { store } from '../store';
import axios from 'axios';
import tt from '@tomtom-international/web-sdk-maps';

export default {
    components: {

    },
    data() {
        return {
            store,
        }
    },
    computed(){
        document.addEventListener('DOMContentLoaded', function () {
        const map = document.getElementById('map');
        console.log(map);
        setMap();
        })
    },
    methods: {

    }
}

</script>

<template>   
    <div id="map-create" class="col-12">
        <div id="map" class="map"></div>
    </div>
</template>

<style lang="scss">
#map {
    width: 100vw;
    height: 300px;
}
</style>
