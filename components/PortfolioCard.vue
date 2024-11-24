<!-- components/PortfolioCard.vue -->
<template>
  <a
    :href="portfolio.link"
    target="_blank"
    class="flex flex-col gap-3 p-4 transition-colors border-2 rounded-md shadow-lg border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:shadow-xl"
    aria-label="Portfolio link to {{ portfolio.name }}"
  >
    <div class="relative w-full pt-[56.25%] overflow-hidden rounded-md">
      <img
        :alt="portfolio.name"
        :src="portfolio.image"
        class="absolute inset-0 object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
        loading="lazy"
      />
    </div>
    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-medium text-white">{{ portfolio.name }}</h3>
      <p class="text-sm text-gray-400">
        {{ portfolio.description }}
      </p>
    </div>

    <div class="flex gap-1 mt-auto">
      <span
        v-for="stack in portfolio.stack"
        :key="stack"
        class="px-2 py-1 text-xs bg-gray-800 rounded text-mygray"
        >{{ stack }}</span
      >
    </div>
  </a>
</template>

<script>
export default {
  name: "PortfolioCard",
  props: {
    portfolio: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
a {
  transition: box-shadow 0.3s ease-in-out;
}
</style>
