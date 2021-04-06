const pkg = require("./package");

module.exports = {
  mode: "spa",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  buildModules: ["@nuxtjs/vuetify"],

  plugins: ["~/plugins/simple-alert.js"],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],

  server: {
    port: 3000,
    host: "0.0.0.0",
  },

  router: {
    base: "/",
  },
};
