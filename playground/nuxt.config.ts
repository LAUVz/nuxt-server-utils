export default defineNuxtConfig({
  modules: ["../src/module"],
  nuxtServerUtils: {
    mongodbURL: process.env.MONGODB_URL,
  },
  devtools: { enabled: true },
});
