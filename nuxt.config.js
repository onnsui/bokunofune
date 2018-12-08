const { getConfigForKeys } = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
])
const { createClient } = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

module.exports = {
  build: {
    vendor: ['element-ui'],
  },
  plugins: ['~plugins/element-ui'],
  css: ['element-ui/lib/theme-chalk/index.css'],
}
const config = {
  mode: 'spa',
  head: {
    title: 'bokunofune',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: { color: '#3B8070' },

  build: {
    // babel: {
    //   plugins: [
    //     [
    //       'component',
    //       [
    //         {
    //           libraryName: 'element-ui',
    //         },
    //       ],
    //     ],
    //   ],
    // },
    // extend(config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/,
    //     })
    //   }
    // },
  },

  plugins: [
    { src: '~plugins/contentful' },
    { src: '~plugins/element-ui', ssr: false },
  ],

  generate: {
    routes() {
      return cdaClient
        .getEntries({
          content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID,
        })
        .then(entries => {
          return [...entries.items.map(entry => `/blog/${entry.fields.slug}`)]
        })
    },
  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID,
  },
}

module.exports = config
