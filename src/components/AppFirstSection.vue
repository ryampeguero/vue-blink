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
    <div class="container d-flex justify-content-center mt-5 mb-5 ">
        <div class="row ms_card_section">
            <div class="col-md-12 col-lg-6 ">
                <div class="p-4">
                    <h1>Dalla ricerca alla prenotazione,<br>
                        tutto in un Blink</h1>
                    <p>
                        Blink nasce con l’obiettivo di rendere la prenotazione di camere facile, veloce e sicura.
                        Grazie a una tecnologia all'avanguardia e a un team dedicato, ti offriamo un servizio di
                        prenotazione intuitivo e affidabile. Ogni viaggio inizia con un Blink – perché sappiamo
                        quanto il tuo tempo sia prezioso.
                    </p>
                </div>
            </div>
            <div class="col-md-12 col-lg-6 d-flex justify-content-center">
                <div>
                    <img class="img_girl" src="../../public/img/globe-girl-1.png" alt="">
                </div>
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


.img_girl {
    max-width: 500px;
    object-fit: contain;
    height: 100%;
    width: 100%;
}


</style>
