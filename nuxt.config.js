export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: 'static',
  server: {
    port: 3005,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-ejpovice',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // We need this for github pages
  router: {
    base: '/vue-ejpovice/'
  },

  // Axios proxy config
  axios: { 
    proxy: true,
    browserBaseURL: 'http://localhost:80' // dev
  },
  proxy: {
    '/api/': 'https://localhost:80/api/', // dev
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/is-mobile.js',
    '~/plugins/v-click-outside.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',  // style-resources allow us to not having to import scss files in every component
    '@nuxtjs/axios',
  ],

  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/mixins.scss',
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            domine: ['Domine', 'serif'],
            roboto: ['Roboto', 'sans-serif'],
          },
        }
      }
    }
  },
}
