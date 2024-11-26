<template>
  <section class="flex flex-col w-full gap-6">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <PortfolioCard
        v-for="portfolio in portfolios.slice(0, 2)"
        :key="portfolio.id"
        :portfolio="portfolio"
      />
    </div>
    <NuxtLink
      to="/portfolios"
      class="px-6 py-3 text-center text-white transition-all duration-300 bg-blue-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
    >
      View All Projects
    </NuxtLink>
  </section>
</template>

<script setup>
import portfolios from "@/data/portfolios.json";
</script>

<style></style>
