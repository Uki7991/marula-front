// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@fullpage/nuxt-fullpage'
  ],
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
})
