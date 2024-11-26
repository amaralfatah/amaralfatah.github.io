<!-- components/PortfolioCard.vue -->
<template>
  <div class="card-base group">
    <a class="flex flex-col gap-4">
      <!-- Image Container -->
      <div class="relative w-full pt-[56.25%] overflow-hidden rounded-lg">
        <img
          :alt="portfolio.name"
          :src="portfolio.image"
          class="absolute inset-0 object-cover w-full h-full transition-all duration-500 ease-out transform group-hover:scale-110"
          loading="lazy"
        />
        <!-- Overlay on hover -->
        <div
          class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100"
        >
          <a
            :href="portfolio.link"
            target="_blank"
            :aria-label="`View project: ${portfolio.name}`"
            class="px-4 py-2 font-medium text-white transition-transform duration-300 transform translate-y-4 rounded-lg bg-primary-600 group-hover:translate-y-0"
          >
            View Project
          </a>
        </div>
      </div>

      <!-- Content Section -->
      <div class="flex flex-col flex-grow gap-3">
        <div class="space-y-2">
          <h3
            class="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-primary-400"
          >
            {{ portfolio.name }}
          </h3>
          <p class="text-sm leading-relaxed text-gray-400">
            {{ portfolio.description }}
          </p>
        </div>

        <!-- Tech Stack -->
        <div class="flex flex-wrap gap-2 mt-auto">
          <SkillBadge
            v-for="stack in portfolio.stack"
            :key="stack"
            :name="stack"
          />
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "PortfolioCard",
  props: {
    portfolio: {
      type: Object,
      required: true,
      validator: (prop) => {
        return ["name", "description", "image", "link", "stack"].every(
          (key) => key in prop
        );
      },
    },
  },
};
</script>

<style scoped>
.bg-primary-600 {
  @apply bg-blue-600;
}

.text-primary-400 {
  @apply text-blue-400;
}
</style>
