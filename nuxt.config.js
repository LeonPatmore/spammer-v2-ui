const pkg = require("./package");

const spammerLeaderHost = process.env.SPAMMER_LEADER_HOST;
const spammerLeaderPort = process.env.SPAMMER_LEADER_PORT;

module.exports = {
  mode: "universal",

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

  proxy: {
    "/api/": {
      target: `http://${spammerLeaderHost}:${spammerLeaderPort}`,
      pathRewrite: { "^/api/": "" },
    },
  },

  axios: {
    proxy: true,
  },

  // serverMiddleware: [{ path: "/api", handler: "~/api/index.js" }],

  buildModules: ["@nuxtjs/vuetify"],

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
