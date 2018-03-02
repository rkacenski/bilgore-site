<template>
<div>
    <nav-header />

    <section class="section services">
        <div class="container">
            <div class="columns">
                <div class="column is-10 is-offset-1">
                    <div class="section-title">
                        <h2 class="title is-2">services</h2>
                        <hr>
                    </div>
                    <services />
                </div>
            </div>
        </div>
    </section>

    <section class="section projects">
        <div class="container">
            <div class="columns">
                <div class="column is-10 is-offset-1">
                    <div class="section-title">
                        <h2 class="title is-2">projects</h2>
                        <hr>
                    </div>
                    <projects />
                </div>
            </div>
        </div>
    </section>

    <section class="section about">
        <div class="container">
            <div class="section-title">
                <h2 class="title is-2">about</h2>
                <hr>
            </div>
            <about />
        </div>
    </section>

    <section class="section contact">
        <div class="container">
            <div class="section-title">
                <h2 class="title is-2">contact</h2>
                <hr>
            </div>
            <contact />
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                © Diane Bilgore 2018
                </p>
                <p>
                <a href="http://rkacenski.com">Created by Ryan Kacenski</a>
                </p>
            </div>
        </div>
    </footer>

</div>
</template>

<script>
import NavHeader from '~/components/NavHeader.vue'
import Services from '~/components/Services.vue'
import Projects from '~/components/Projects.vue'
import About from '~/components/About.vue'
import Contact from '~/components/Contact.vue'
import ScrollTo from '~/plugins/scroll'
import Vue from 'vue';

Vue.use(ScrollTo, {speed: 500});

export default {
  components: {
    NavHeader,
    Services,
    Projects,
    About,
    Contact
  }
}
/*
(function($) {
	lazy_load_init();
	$( 'body' ).bind( 'post-load', lazy_load_init ); // Work with WP.com infinite scroll

	function lazy_load_init() {
		$( 'img[data-lazy-src]' ).bind( 'scrollin', { distance: 200 }, function() {
			lazy_load_image( this );
		});

		// We need to force load gallery images in Jetpack Carousel and give up lazy-loading otherwise images don't show up correctly
		$( '[data-carousel-extra]' ).each( function() {
			$( this ).find( 'img[data-lazy-src]' ).each( function() {
				lazy_load_image( this );
			} );
		} );
	}

	function lazy_load_image( img ) {
		var $img = jQuery( img ),
			src = $img.attr( 'data-lazy-src' );

		if ( ! src || 'undefined' === typeof( src ) )
			return;

		$img.unbind( 'scrollin' ) // remove event binding
			.hide()
			.removeAttr( 'data-lazy-src' )
			.attr( 'data-lazy-loaded', 'true' );

		img.src = src;
		$img.fadeIn();
	}
})(jQuery);*/
</script>

<style lang="css">
    h2.title {
        text-align: center;
    }
</style>
