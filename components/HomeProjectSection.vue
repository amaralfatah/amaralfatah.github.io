<template>
  <section class="flex flex-col w-full gap-4">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <PortfolioCard
        v-for="portfolio in portfolios.slice(0, 2)"
        :key="portfolio.id"
        :portfolio="portfolio"
      />
    </div>
    <NuxtLink
      to="/portfolios"
      class="py-2 text-center transition-all duration-300 border rounded-lg bg-myblack border-mygray/10 hover:border-mygray/20"
    >
      View All Projects
    </NuxtLink>
  </section>
</template>

<script setup>
import portfolios from "@/data/portfolios.json";
</script>

<style></style>
