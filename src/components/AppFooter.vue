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
    <!-- footer button -->
    <footer class="pt-5 pb-5">
        <div class="footer_text container d-flex flex-column">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <h1 class="footer_title">Ispirazione per viaggi futuri</h1>
                </div>

                <div class="footer_list d-flex wrap col-6">
                    <ul>
                        <li>
                            <h3>Acireale</h3>
                            <a href="">Soggiorni in baite</a>
                        </li>

                        <li>
                            <h3>Amsterdam</h3>
                            <a href="">Soggiorni in baite</a>
                        </li>

                        <li>
                            <h3>Arezzo</h3>
                            <a href="">Soggiorni in baite</a>
                        </li>

                        <li>
                            <h3>Assisi</h3>
                            <a href="">Soggiorni in baite</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <h3>Barcellona</h3>
                            <a href="">Soggiorni in baite</a>
                        </li>

                        <li>
                            <h3>Bologna</h3>
                            <a href="">Soggiorni in case</a>
                        </li>

                        <li>
                            <h3>Catania</h3>
                            <a href="">Soggiorni in chalet</a>
                        </li>

                        <li>
                            <h3>Chia</h3>
                            <a href="">Case Vacanza</a>
                        </li>
                    </ul>

                </div>
                <div class="footer_social d-flex justify-content-between border_top p-2">
                    <div class="">
                        <h5>Blink srl</h5>
                    </div>

                    <div class="d-flex gap-3">
                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                        <a href=""><i class="fa-brands fa-youtube"></i></a>
                        <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                        <a href=""><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use"../scss/partials/_variables" as*;

footer {

    .border_top {
        border-top: 1px solid white;
    }

    background-color: $primary-color;
    margin-top: auto;

    .footer_title {
        font-size: 2rem;
    }

    .footer_text {
        color: white;

        ul {
            padding: 0;
        }
    }

    .footer_list {
        display: flex;
        gap: 50px;

        h3 {
            font-size: 1.2rem;
            font-weight: 700;
            font-style: bolder;
        }

        a {
            font-size: 0.8;
            font-weight: 100;
            font-style: italic;
        }

        li {
            margin-bottom: 1rem;
        }
    }

    a {
    text-decoration: none;
    color: inherit;
}
}
</style>
