<template>
  <main class="flex flex-col gap-8">
    <!-- Header Section -->
    <section class="flex-col hidden gap-4 md:flex">
      <h1 class="text-3xl font-medium">Tech Stacks</h1>
      <p>Tools & technologies I use to bring ideas to life.</p>
    </section>

    <!-- Search Input -->
    <section
      class="flex flex-col items-start justify-start gap-4 space-y-4 sm:space-y-0"
    >
      <div class="relative w-full sm:w-64">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search technologies..."
          class="w-full px-4 py-2 pl-10 text-sm text-gray-800 bg-transparent border rounded-lg dark:text-mywhite border-mygray/10 dark:border-mygray/20 focus:outline-none focus:border-mygray/30 dark:focus:border-mygray/40"
        />
        <Icon
          icon="heroicons:magnifying-glass"
          class="absolute w-4 h-4 transform -translate-y-1/2 text-mygray/50 left-3 top-1/2"
        />
      </div>
      <!-- Category Filter -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="category in categories"
          :key="category"
          @click="toggleCategory(category)"
          :class="[
            'px-3 py-1.5 text-xs rounded-lg transition-all duration-300 border',
            selectedCategories.includes(category)
              ? 'border-gray-800 text-gray-800 dark:border-mywhite dark:text-mywhite'
              : 'border-mygray/20 text-gray-600 dark:text-mygray hover:border-gray-800/50 dark:hover:border-mygray/40',
          ]"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <!-- Stacks Grid -->
    <TransitionGroup
      appear
      tag="div"
      class="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 md:grid-cols-4"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <div
        v-for="(stack, index) in filteredStacks"
        :key="stack.name"
        :data-index="index"
        class="relative group"
      >
        <div
          class="flex flex-col items-center p-6 transition-all duration-300 bg-white border rounded-lg dark:bg-myblack border-mygray/10 dark:border-mygray/10 hover:border-gray-800/20 dark:hover:border-mywhite/20"
        >
          <!-- Icon -->
          <div class="relative mb-4">
            <Icon
              :icon="stack.icon"
              class="text-2xl text-gray-800 transition-all duration-300 dark:text-mygray group-hover:text-gray-800 dark:group-hover:text-mywhite"
            />
          </div>

          <!-- Stack Name -->
          <span
            class="text-sm font-medium text-center text-gray-800 transition-colors duration-300 dark:text-mygray group-hover:text-gray-800 dark:group-hover:text-mywhite"
          >
            {{ stack.name }}
          </span>

          <!-- Category -->
          <span
            class="mt-2 text-center text-[10px] font-medium tracking-wider uppercase text-gray-500 dark:text-mygray/60"
          >
            {{ stack.category }}
          </span>
        </div>
      </div>
    </TransitionGroup>

    <!-- Empty State -->
    <div
      v-if="filteredStacks.length === 0"
      class="flex flex-col items-center justify-center py-12 text-center"
    >
      <p class="mb-4 text-gray-600 dark:text-mygray">No results found</p>
      <button
        @click="resetFilters"
        class="px-4 py-2 text-sm text-gray-600 transition-colors border rounded-lg dark:text-mygray border-mygray/20 hover:border-gray-800/30 dark:hover:border-mygray/40"
      >
        Reset Filters
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import gsap from "gsap";
import stacksData from "@/data/stacks.json";

// State
const searchQuery = ref("");
const selectedCategories = ref([]);

// Define category order for sorting
const categoryOrder = [
  "Languages",
  "Frameworks",
  "CSS Frameworks",
  "Databases",
  "Tools",
];

// Computed
const filteredStacks = computed(() => {
  return stacksData.stacks
    .filter((stack) => {
      const matchesSearch =
        stack.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        stack.category.toLowerCase().includes(searchQuery.value.toLowerCase());
      const matchesCategory =
        selectedCategories.value.length === 0 ||
        selectedCategories.value.includes(stack.category);
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const categoryA = categoryOrder.indexOf(a.category);
      const categoryB = categoryOrder.indexOf(b.category);
      if (categoryA !== categoryB) {
        return categoryA - categoryB;
      }
      return a.name.localeCompare(b.name);
    });
});

const categories = computed(() => {
  return [...new Set(stacksData.stacks.map((stack) => stack.category))].sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );
});

// Methods
const toggleCategory = (category) => {
  const index = selectedCategories.value.indexOf(category);
  if (index === -1) {
    selectedCategories.value.push(category);
  } else {
    selectedCategories.value.splice(index, 1);
  }
};

const resetFilters = () => {
  searchQuery.value = "";
  selectedCategories.value = [];
};

// Animations
const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
};

const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    delay: el.dataset.index * 0.05,
    ease: "power2.out",
    onComplete: done,
  });
};
</script>
