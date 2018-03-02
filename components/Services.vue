<template lang="html">
    <div>
        <div class="columns">
            <div class="column">
                <h3 class="title is-3">Design Services</h3>
                <h4 class="subtitle is-4">A welcomed collaboration with our clients develops spaces that are harmonious
with their lifestyles and environment.</h4>

            </div>
        </div>

        <div class="columns">
            <div class="column is-8">
                <agile :fade="true" :dots="false" :arrows="false">
                    <div class="slide slide--1">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="/img/services/design.jpg" alt="Placeholder image">
                            </figure>
                        </div>
                    </div>
                </agile>
            </div>

            <div class="column service-list">
                <ul>
                    <li>Landscape master plans</li>
                    <li>Design and Installation</li>
                    <li>Perennial and shrub gardens</li>
                    <li>Vegetable and cutting gardens</li>
                    <li>Pools and hardscaping</li>
                    <li>Containers and annuals</li>
                </ul>
            </div>
        </div>

        <hr>

        <div class="columns">
            <div class="column">
                <h3 class="title is-3">Plant care and maintenance service</h3>
                <h4 class="subtitle is-4">Every plant or shrub requires a different method of pruning and fertilization
Our team of trained gardeners follow correct horticultural practices while
monitoring site specific challenges.</h4>

            </div>
        </div>

        <div class="columns">
            <div class="column is-8">
                <agile :fade="true" :arrows="false" :autoplay="true">
                    <div class="slide slide--2">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="/img/services/1.jpg" alt="Placeholder image">
                            </figure>
                        </div>
                    </div>
                    <div class="slide slide--3">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="/img/services/2.jpg" alt="Placeholder image">
                            </figure>
                        </div>
                    </div>
                    <div class="slide slide--4">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="/img/services/3.jpg" alt="Placeholder image">
                            </figure>
                        </div>
                    </div>
                    <div class="slide slide--5">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="/img/services/4.jpg" alt="Placeholder image">
                            </figure>
                        </div>
                    </div>
                    <div class="slide slide--6">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="/img/services/5.jpg" alt="Placeholder image">
                            </figure>
                        </div>
                    </div>
                    <div class="slide slide--7">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="/img/services/6.jpg" alt="Placeholder image">
                            </figure>
                        </div>
                    </div>
                </agile>
            </div>

            <div class="column service-list">
                <ul>
                    <li>Renovation</li>
                    <li>Pruning and training</li>
                    <li>Plant health care</li>
                    <li>Seasonal Requirements</li>
                    <li>Liason between tradesmen</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import Agile from './Agile.vue'

export default {
    components: {
        Agile
    }
}
</script>

<style lang="css">
    .slide {
        box-shadow: 0px 0px 10px #88888878;
        border: 9px #fff solid;
        margin: 18px;
    }

    .services h2, .services h3, .services h4 {
        color: rgb(128, 143, 67);
    }

    .services h3 {
        font-size: 34px !important;
        font-weight: 700;
    }

    .services h4 {
        font-size: 16px !important;
        padding: 24px 12px 28px 32px;
    }
    .service-list {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .service-list li {
        margin: 0 0 15px 0;
    }
</style>
