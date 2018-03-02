<template lang="html">
    <div>
        <div class="columns is-multiline">
            <div class="column is-one-third-desktop is-half-tablet" v-for="(i, key) in items" :key="key">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img :src="i.thumbnail" :alt="i.title">
                        </figure>
                    </div>
                    <footer class="card-footer">
                        <a @click="showIt(key)" class="button projects-btn">{{ i.title }}</a>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Popup, { Modal } from './modal'

export default {
    data() {
        return {
            items: [
                {
                    title: 'Events',
                    subtitle: null,
                    caption: 'DAB Design, LLC evokes simple pleasures, creating arrangements and tablescapes for events of all kinds including parties and weddings. Our inspiration is derived from extracting a unique blend of the classic and the unexpected.',
                    images: [
                        '/img/project/events/1.jpg',
                        '/img/project/events/2.jpg',
                        '/img/project/events/3.jpg',
                        '/img/project/events/4.jpg',
                        '/img/project/events/5.jpg',
                        '/img/project/events/6.jpg'
                    ],
                    thumbnail: '/img/project/thumbs/event.jpg'
                },
                {
                    title: 'Holiday',
                    subtitle: null,
                    caption: 'Steeped in tradition, DAB Design adds warmth and mirth to your home for the holiday season. We install custom designed wreaths, roping, trees and ornaments to blend the magic of family and hearth.',
                    images: [
                        '/img/project/holiday/1.jpg',
                        '/img/project/holiday/2.jpg',
                        '/img/project/holiday/3.jpg',
                        '/img/project/holiday/4.jpg',
                        '/img/project/holiday/5.jpg',
                        '/img/project/holiday/6.jpg'
                    ],
                    thumbnail: '/img/project/thumbs/holiday.jpg'
                },
                {
                    title: 'Containers',
                    subtitle: null,
                    caption: 'Enhancing your landscape, containers add punctuation and grounding at key areas such as an entrance, on a terrace or around a pool. Whether a simple blanket of moss or a combination of color and texture DAB Design works with you to create a reflection of your imagination.',
                    images: [
                        '/img/project/containers/1.jpg',
                        '/img/project/containers/2.jpg',
                        '/img/project/containers/3.jpg',
                        '/img/project/containers/4.jpg',
                        '/img/project/containers/5.jpg',
                        '/img/project/containers/6.jpg',
                        '/img/project/containers/7.jpg',
                        '/img/project/containers/8.jpg',
                        '/img/project/containers/9.jpg',
                        '/img/project/containers/10.jpg',
                        '/img/project/containers/11.jpg',
                        '/img/project/containers/12.jpg',
                        '/img/project/containers/13.jpg',
                        '/img/project/containers/14.jpg',
                        '/img/project/containers/15.jpg',
                    ],
                    thumbnail: '/img/project/thumbs/containers.jpg'
                },
                {
                    title: 'New Construction',
                    subtitle: 'Westchester County',
                    caption: '',
                    images: [
                        '/img/project/newcon/1.jpg',
                        '/img/project/newcon/2.jpg',
                        '/img/project/newcon/3.jpg',
                        '/img/project/newcon/4.jpg',
                        '/img/project/newcon/5.jpg',
                    ],
                    thumbnail: '/img/project/thumbs/newcon.jpg'
                },
                {
                    title: 'Antique Residence',
                    subtitle: 'New Canaan, CT',
                    caption: '',
                    images: [
                        '/img/project/antique/1.jpg',
                        '/img/project/antique/2.jpg',
                        '/img/project/antique/3.jpg',
                        '/img/project/antique/4.jpg',
                        '/img/project/antique/5.jpg',
                        '/img/project/antique/6.jpg',
                    ],
                    thumbnail: '/img/project/thumbs/antique.jpg'
                },
                {
                    title: 'Images',
                    subtitle: 'A collection of details',
                    caption: '',
                    images: [
                        '/img/project/images/1.jpg',
                        '/img/project/images/2.jpg',
                        '/img/project/images/3.jpg',
                        '/img/project/images/4.jpg',
                        '/img/project/images/5.jpg',
                        '/img/project/images/6.jpg',
                        '/img/project/images/7.jpg',
                        '/img/project/images/8.jpg',
                        '/img/project/images/9.jpg',
                    ],
                    thumbnail: '/img/project/thumbs/images.jpg'
                },
                {
                    title: 'Formal Gardens',
                    subtitle: 'Renovation and Design | Fairfield County',
                    caption: '',
                    images: [
                        '/img/project/formal/1.jpg',
                        '/img/project/formal/2.jpg',
                        '/img/project/formal/3.jpg',
                        '/img/project/formal/4.jpg',
                        '/img/project/formal/5.jpg',
                        '/img/project/formal/6.jpg',
                    ],
                    thumbnail: '/img/project/thumbs/formal.jpg'
                },
            ]
        }
    },

    methods: {
        showIt(index) {
            console.log(this.items[index]);
            Popup.open({
                parent: this,
                itemData: this.items[index],
            });
        }
    }
}
</script>

<style lang="css">
    .projects {
        background: #474747;
    }

    .projects h2 {
        color: #fff;
    }

    .projects .card {
        padding: 8px;
        border-radius: 4px;
        justify-content: center;
        align-items: center;
    }

    .projects-btn {
        height: 50px;
        padding: 8px 20px 8px 20px;
        font-size: 22px;
        color: white;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
        background: rgb(147, 165, 72);
        border-bottom: 2px solid rgb(128, 145, 60);
        box-shadow: inset 0 -2px rgb(128, 145, 60);
        margin: 10px 0 5px 0;
    }
</style>
