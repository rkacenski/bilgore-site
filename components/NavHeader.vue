<template lang="html">
    <section class="hero is-fullheight">
        <div class="main-menu">
            <div class="menu-border">
                <nav>
                    <div class="logo"><img src="img/logo.png"></div>
                    <aside>
                        <ul>
                            <li class="services-link" v-scroll-to="'.services, 0px'"><a href="#services">SERVICES</a></li>
                            <li class="projects-link" v-scroll-to="'.projects, 0px'"><a href="#work">PROJECTS</a></li>
                            <li class="about-link" v-scroll-to="'.about, 0px'"><a href="#about">ABOUT</a></li>
                            <li class="contact-link" v-scroll-to="'.contact, 0px'"><a href="#contact">CONTACT</a></li>
                        </ul>
                    </aside>
                </nav>
            </div>
        </div>
        <img class="hero is-fullheight" style="object-fit:cover" src="/img/header/3.jpg" alt="">
    </section>
</template>

<script>
export default {
    data() {
        return {
            images: [
                '/img/header/3.jpg',
                '/img/header/4.jpg',
                '/img/header/5.jpg',
            ],
            activeImage: 0,
        }
    },
    computed: {
        currentImage() {
            return {
                background: 'url("'+this.images[this.activeImage]+'") center center / cover',
            }
        }
    },
    methods: {
        load_image (path) {
            const img = new Image()
            this.bindEvent(img, 'load', this.loaded)
            img.src = path
        },
        bindEvent(el, type, fn) {
          if (el.attachEvent)
            el.attachEvent(`on${type}`, fn)
          else
            el.addEventListener(type, fn, { capture: false, passive: true })
        },
        loaded(el) {
            el.src = path
        }

        //https://github.com/nkoehring/v-lazy-img/blob/master/src/index.js

    },
    mounted() {
        /*
        const self = this;
        const imageCount = self.$data.images.length - 1;

        setInterval(function() {
            if(self.$data.activeImage < imageCount)
                self.$data.activeImage++;
            else
                self.$data.activeImage = 0;
        }, 5000);
        */
    }
}
</script>

<style lang="css">

div.main-menu
{
    width: 100%;
    height: 100vh;
    position: absolute;;
}
div.main-menu.fixed
{
	top: 0;
	margin-top: 13px;
	z-index: 10;
}
div.main-menu div.logo
{
	padding: 14px 34px 20px 16px;
	width: 122%;
	background: rgba(255, 255, 255, 0.81);
	box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.58);
	-webkit-border-top-right-radius: 6px;
	-webkit-border-bottom-right-radius: 6px;
	-moz-border-radius-topright: 6px;
	-moz-border-radius-bottomright: 6px;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
}

div.main-menu div.logo img {
	width: 105%;
}
div.menu-border
{
	/*border: 10px solid #DBC76C;
	margin-left: auto;
	margin-right: auto;*/
	max-width: 335px;
	border-radius: 10px;
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	height: 100%;
}
div.main-menu nav
{
    height: 100vh;
    max-width: 253px;
	background-color: rgba(153, 165, 99, 0.7);
	padding-right: 30px;
	font-size: 14px;
	font-family: "Engravers";
	font-weight: 600;
	letter-spacing: 1px;
	padding-top: 15px;

}
div.main-menu nav aside
{
	padding: 40px 0 0 45px;
}
div.main-menu nav ul
{
	height: 100%;
}
div.main-menu nav ul li
{
	display: block;
	list-style-type: none;
	height: 100%;
	text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.79);
}
div.main-menu nav ul li.active, div.main-menu nav ul li:hover
{
	text-decoration: underline;
}
div.main-menu nav a
{
	color: #FFFFFF;
	text-decoration: none;
	display: block;
	padding: 28px 10px 25px 10px;
	font-size: 22px;
}
img.line
{
	display: inline-block;
    margin: 25px 0;
}
img.line_long {
	display: inline-block;
    margin: 25px 0 85px;
    width: 40%;
    height: 1px;
}
</style>
