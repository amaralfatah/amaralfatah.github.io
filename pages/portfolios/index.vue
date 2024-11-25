<!-- pages/portfolio/index.vue -->
<!-- pages/portfolio/index.vue -->
<template>
  <main class="flex flex-col gap-8">
    <!-- Header Section -->
    <Header
      :id="header"
      :title="'Portfolios'"
      :subtitle="'Projects I\'m working on. More added all the time.'"
    />

    <!-- Loading State -->
    <div v-if="isLoading" class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div
        v-for="n in 4"
        :key="n"
        class="p-4 border rounded-lg animate-pulse border-mygray/10"
      >
        <div class="flex flex-col gap-4">
          <div
            class="w-full h-48 bg-gray-200 rounded-lg dark:bg-gray-700"
          ></div>
          <div class="space-y-3">
            <div class="w-3/4 h-6 bg-gray-200 rounded dark:bg-gray-700"></div>
            <div class="w-1/2 h-4 bg-gray-200 rounded dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <section v-else class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <PortfolioCard
        v-for="portfolio in portfolios"
        :key="portfolio.id"
        :portfolio="portfolio"
      />
    </section>

    <!-- Error State -->
    <div
      v-if="error"
      class="p-4 text-center text-red-500 bg-red-100 rounded-lg dark:bg-red-900/20"
    >
      {{ error }}
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";

useHead({
  title: "Portfolios - Amar Al Fatah",
});

const portfolios = ref([]);
const isLoading = ref(true);
const error = ref(null);

const fetchPortfolios = async () => {
  try {
    isLoading.value = true;
    // Simulate API call with timeout
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Import portfolios data
    const data = await import("@/data/portfolios.json");
    portfolios.value = data.default;
  } catch (err) {
    error.value = "Failed to load portfolios. Please try again later.";
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchPortfolios();
});
</script>
