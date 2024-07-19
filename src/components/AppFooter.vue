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
            <div>
                <h1 class="footer_title">Ispirazione per viaggi futuri</h1>
            </div>

            <div class="footer_list">
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
                
                <ul>
                    <li>
                        <h3>Acireale</h3>
                        <a href="">Soggiorni in baite</a>
                    </li>
    
                    <li>
                        <h3>Firenze</h3>
                        <a href="">Soggiorni in case</a>
                    </li>
    
                    <li>
                        <h3>Giulianova</h3>
                        <a href="">Case vacanze</a>
                    </li>
    
                    <li>
                        <h3>Livorno</h3>
                        <a href="">Soggiorni in case</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use"../scss/partials/_variables" as*;

footer {
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
        margin-top: 40px;
        display: flex;
        gap: 50px;
        
        li {
            margin-bottom: 2rem;
        }
    }
}
</style>
