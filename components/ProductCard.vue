<!-- components/ProductCard.vue -->
<!-- components/ProductCard.vue -->
<template>
  <div>
    <!-- Loading State -->
    <div
      v-if="loading"
      class="flex items-center gap-4 py-6 rounded-md animate-pulse"
    >
      <div class="w-16 h-16 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
      <div class="flex flex-col gap-2">
        <div class="w-32 h-4 bg-gray-200 rounded dark:bg-gray-700"></div>
        <div class="w-24 h-3 bg-gray-200 rounded dark:bg-gray-700"></div>
      </div>
    </div>

    <!-- Product Content -->
    <a
      v-else
      :href="product.href"
      class="flex items-center gap-4 py-6 no-underline transition-all duration-200 rounded-md hover:bg-sidebar-bg hover:border-ui-component-default hover:px-3 hover:-mx-3"
    >
      <div class="w-16 h-16 overflow-hidden">
        <img
          :alt="product.title"
          :src="product.image"
          class="object-cover h-full rounded-lg"
          loading="lazy"
          @error="handleImageError"
        />
      </div>
      <div class="flex flex-col">
        <span>{{ product.title }}</span>
        <span class="flex items-center gap-1 font-regular text-mygray">
          {{ product.type }}
          <DotIcon class="w-2.5 h-2.5" />
          ${{ product.price }}
        </span>
      </div>
    </a>

    <!-- Error State -->
    <div
      v-if="error"
      class="p-2 text-sm text-red-500 bg-red-100 rounded dark:bg-red-900/20"
    >
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const error = ref(null);

const handleImageError = () => {
  error.value = "Failed to load image";
};
</script>
