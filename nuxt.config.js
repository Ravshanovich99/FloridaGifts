export default {
  head: {
    title: 'Florida',
    
    htmlAttrs: {
      lang: 'ru',
    },
    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Подарки на любой вкус',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          "gifts, подарки, подарки в ташкенте, подарки на день рождения, подарочные альбомы, подарочные портреты, день рождения, tug'ilgan kun, tug'ilgan kun uchun sovg'alar, sovg'alar, florida",
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  target: 'static',
  router: {
    base: '/FloridaGifts/',
  },

  css: ['./assets/main.scss'],

  plugins: [
    {
      src: './plugins/vue-icons.js',
      mode: 'client',
    },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/dotenv'],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',

      {
        config: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          databaseURL: process.env.DATABASE_URL,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
          measurementId: process.env.MEASURMENT_ID,
        },

        services: {
          auth: {
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
            },
          },
          database: true,
          storage: true,
        },
      },
    ],
  ],

  axios: {
    baseURL: '/',
  },

  build: {
    babel: {
      compact: true,
    },
  },
}
