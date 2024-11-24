<!-- components/PortfolioCard.vue -->
<template>
  <a
    :href="portfolio.link"
    target="_blank"
    class="flex flex-col gap-3 p-4 transition-colors border-2 border-gray-200 rounded-md dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800"
  >
    <div class="relative w-full pt-[56.25%]">
      <img
        :alt="portfolio.name"
        :src="portfolio.image"
        class="absolute inset-0 object-cover w-full h-full rounded-md"
        loading="lazy"
      />
    </div>
    <div>
      <h3 class="text-lg font-medium">{{ portfolio.name }}</h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ portfolio.description }}
      </p>
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
