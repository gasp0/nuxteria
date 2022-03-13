import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    // CSS file in the project
    '@/assets/css/bootstrap.min.css',
    // SCSS file in the project
    '@/assets/css/custom.css',
  ],
})
