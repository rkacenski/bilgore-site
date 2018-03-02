module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Diane Bilgore - Fine Gardens',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Fine Gardens and Estate Management by Diane Bilgore. High-end landscaping, gardening, and pool design in Fairfield and Westchester County.'},
      { hid: 'keywords', name:'keywords', content: 'daine bilgore, luxury landscaping, estate management, gardening, fine gardens, landscaping, maintenace' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

    css: [
        '@/assets/main.sass',
    ],

    plugins: [
        // ssr: false to only include it on client-side
        { src: '~/plugins/scroll.js' }
    ],


  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
