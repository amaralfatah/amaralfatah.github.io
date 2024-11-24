<!-- pages/portfolio/index.vue -->
<template>
  <div class="flex flex-col gap-16">
    <div class="flex flex-col gap-4">
      <h1 class="text-3xl font-medium">Portfolio</h1>
      <p>Projects I'm working on. More added all the time.</p>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <PortfolioCard
        v-for="portfolio in portfolios"
        :key="portfolio.id"
        :portfolio="portfolio"
      />
    </div>
  </div>
</template>

<script setup>
import portfolios from "@/data/portfolios.json";
</script>
