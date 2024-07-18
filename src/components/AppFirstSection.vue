<script>
export default {
    components: {

    },
    data() {
        return {

        };
    },
};
</script>

<template>
    <div class="container">
        <div class="section ms_card_out d-flex row">
            <div class="txt-white p-5 container_img col-6">
                <h1>Dalla ricerca alla prenotazione,<br>
                    tutto in un Blink</h1>
                <p>
                    Blink nasce con l’obiettivo di rendere la prenotazione di camere facile, veloce e sicura. Grazie a una tecnologia all'avanguardia e a un team dedicato, ti offriamo un servizio di prenotazione intuitivo e affidabile. Ogni viaggio inizia con un Blink – perché sappiamo quanto il tuo tempo sia prezioso.
                </p>
            </div>
            <div class="container_img col-6">
                <img class="img_girl" src="../../public/img/globe-girl-1.png" alt="">
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
@use"../scss/partials/_variables" as*;

.section {
    height: 100%;
    background-color: $primary-color;
    margin: 100px 0 40px 0;
}

.container_img {
    position: relative;
    width: 50%;
}

.img_girl {
    position: absolute;
    bottom: -8px;
    left: 25%;
    height: 500px;

}
</style>
