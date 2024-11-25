// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["~/assets/css/main.css"], // Gunakan path yang benar
  components: {
    global: true,
    dirs: ["~/components"],
  },
  app: {
    head: {
      title: "Amar Al Fatah",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Personal website of Amar Al Fatah",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://amar.my.id",
        },
      ],
    },
    baseURL: "/",
    buildAssetsDir: "assets",
  },
  ssr: true,
  nitro: {
    preset: "github-pages",
    routeRules: {
      "/**": {
        headers: {
          "Cache-Control": "max-age=300, s-maxage=3600",
          "X-Frame-Options": "DENY",
        },
      },
    },
  },
});
