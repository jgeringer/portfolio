require('dotenv').config()
const client = require('./plugins/contentful')
const contentful = require('contentful')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-static-blog-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A static blog built with Nuxt.js and Contentful'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/scss/main.scss'
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
      config.node = {
        fs: 'empty'
      }      
    }
  },
  router: {
    middleware: 'pages'
  },
  plugins: ['~/plugins/contentful'],
  modules: [
    [
      '@nuxtjs/style-resources'
    ],
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  styleResources: {
    // your settings here
    sass: ['assets/scss/core/variables.scss'], // alternative: scss
    less: [],
    stylus: []
   },
  markdownit: {
    injected: true
  },
  generate: {
    routes () {
      const client = contentful.createClient({
        space:  process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN
      })
      return client.getEntries({ content_type: 'post' }).then(entries => {
        return entries.items.map(entry => {
          return {
            route: entry.fields.slug,
            payload: entry
          }
        })
      })
    },
    minify: {
      collapseWhitespace: false
    }  
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN
  }
}
