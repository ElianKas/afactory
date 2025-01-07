// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'swiper-container' || tag === 'swiper-slide',
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@vueuse/nuxt', ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }]],
})
