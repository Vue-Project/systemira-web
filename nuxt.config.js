const webpack = require("webpack");
const path = require("path");

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  

  head: {
    title: "Corptia",
    htmlAttrs: {
      lang: "EN",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        type: "text/javascript",
        src: "/js/jquery.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/js/bootstrap.min.js",
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/bootstrap.css",
    "~/assets/css/main.css",
    "~/assets/css/jPinning.css",
    "~/assets/scss/style.scss",
    "~/assets/css/animate.css",
    "~/assets/css/all.min.css",

    // changeing Approval language code
    {
      src: "@/assets/css/main.css",
      lang: "css",
      condition: ({ app }) => app.i18n.locale === "EN",
    },
    {
      src: "@/assets/css/main-rtl.css",
      lang: "css",
      condition: ({ app }) => app.i18n.locale === "AR",
    },
  ],

  script: [
    {
      src: "https://code.jquery.com/jquery-1.11.0.min.js",
      type: "text/javascript",
    },
    {
      src: "https://code.jquery.com/jquery-migrate-1.2.1.min.js",
      type: "text/javascript",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js",
      type: "text/javascript",
    },
    { src: "~/assets/js/jPinning.js", type: "text/javascript", mode: "client" },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/vue-wow-config" ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-password-protect", "nuxt-i18n"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["jquery", "jPinning"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery",
      }),
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/,
        });
      }
    },
  },
  loading: {
    color: "DodgerBlue",
    height: "10px",
    continuous: true,
    duration: 3000,
  },

  passwordProtect: {
    enabled: false,
    formPath: "/password",
    password: "110220330@@@",
    tokenSeed: 101010,
    queryString: "_pw",
    cookieName: "_password",
    cookie: {
      prefix: "",
      expires: 5,
    },
    ignoredPaths: [""],
  },
  i18n: {
    locales: [
      {
        code: "EN",
        file: "en.json",
      },

      {
        code: "AR",
        file: "ar.json",
      },
    ],
    defaultLocale: "EN",
    vueI18nLoader: true,
    lazy: true,
    langDir: "Languages/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "language",
      alwaysRedirect: true,
      fallbackLocale: "en",
    },
    // ...
    middleware: (context) => {
      const cookieLanguage = context.app.$cookies.get("language");
      if (context.app && cookieLanguage) {
        context.app.i18n.locale = cookieLanguage;
      }
    },
  },
};
