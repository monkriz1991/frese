// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
          baseURL: 'https://new.arhiterm.by/',
        }
    },
    app: {
        head: {
            title: 'Frese',
            htmlAttrs: {
              lang: 'eng'
            },
            meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { hid: 'description', name: 'description', content: 'Frese' },
              {
                hid: 'og:title',
                property: 'og:title',
                content: 'Frese',
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Frese',
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: `https://Frese.by/`,
            },
            {
              hid: 'og:locale',
              property: 'og:locale',
              content: 'ru_RU',
            },
            {
              hid: 'og:type',
              property: 'og:type',
              content: 'website',
            }, 
            ],
          },
        },
    modules: [
        'nuxt-icon',
        'nuxt-swiper',
        ['@nuxtjs/google-fonts', {
          families: {
            Montserrat: [100,300,400,500,600,700,800],
            download: true,
            inject: true
          }
        }],
        [
          'yandex-metrika-module-nuxt3',
          {
            id: '93020253',
            webvisor: true,
          }
        ]
    ],
    css:[
        "@/node_modules/bulma/css/bulma.css",
        "@/assets/main.css",
        '@/node_modules/@swoga/vue-collapsible-panel/dist/vue-collapsible-panel.css',
        '@/node_modules/vue3-photo-preview/dist/index.css'
    ],
    
})
