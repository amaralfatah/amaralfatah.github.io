<!-- components/PortfolioCard.vue -->
<template>
  <div class="card-base group">
    <div class="flex flex-col gap-4">
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
          <div class="flex gap-2">
            <a
              v-if="portfolio.link"
              :href="portfolio.link"
              target="_blank"
              :aria-label="`View project: ${portfolio.name}`"
              class="px-4 py-2 font-medium text-white transition-transform duration-300 transform translate-y-4 rounded-lg bg-primary-600 group-hover:translate-y-0 hover:bg-primary-700"
            >
              View Project
            </a>
            <a
              v-if="portfolio.github"
              :href="portfolio.github"
              target="_blank"
              :aria-label="`View GitHub repository for ${portfolio.name}`"
              class="p-2 text-white transition-transform duration-300 transform translate-y-4 bg-gray-700 rounded-lg group-hover:translate-y-0 hover:bg-gray-600"
            >
              <Github class="w-5 h-5" />
            </a>
            <a
              v-if="portfolio.website"
              :href="portfolio.website"
              target="_blank"
              :aria-label="`Visit live website for ${portfolio.name}`"
              class="p-2 text-white transition-transform duration-300 transform translate-y-4 bg-green-600 rounded-lg group-hover:translate-y-0 hover:bg-green-700"
            >
              <ExternalLink class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Content Section -->
      <div class="flex flex-col flex-grow gap-3">
        <div class="space-y-1">
          <!-- Title and Date Section -->
          <div class="flex flex-col">
            <h3
              class="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-primary-400"
            >
              {{ portfolio.name }}
            </h3>
            <div class="flex items-center gap-2">
              <!-- <Calendar class="w-4 h-4 text-gray-400" /> -->
              <span class="text-xs text-gray-400">
                {{ formatDate(portfolio.date) }}
              </span>
            </div>
          </div>
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
    </div>
  </div>
</template>

<script>
import { Github, ExternalLink, Calendar } from "lucide-vue-next";

export default {
  name: "PortfolioCard",
  components: {
    Github,
    ExternalLink,
    Calendar,
  },
  props: {
    portfolio: {
      type: Object,
      required: true,
      validator: (prop) => {
        return ["name", "description", "image", "link", "stack", "date"].every(
          (key) => key in prop
        );
      },
    },
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });
    },
  },
};
</script>

<style scoped>
.bg-primary-600 {
  @apply bg-blue-600;
}

.bg-primary-700 {
  @apply bg-blue-700;
}

.text-primary-400 {
  @apply text-blue-400;
}
</style>
