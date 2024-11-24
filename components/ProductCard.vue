<!-- components/ProductCard.vue -->
<template>
  <a
    :href="product.href"
    class="flex items-center gap-4 py-6 no-underline transition-all duration-200 rounded-md hover:bg-sidebar-bg hover:border-ui-component-default hover:px-3 hover:-mx-3"
  >
    <div class="w-16 h-16 overflow-hidden">
      <img
        :alt="product.title"
        :src="product.image"
        class="object-cover h-full rounded-lg"
        loading="lazy"
      />
    </div>
    <div class="flex flex-col">
      <span>{{ product.title }}</span>
      <span class="flex items-center gap-1 font-regular text-low-contrast-text">
        {{ product.type }}
        <DotIcon class="w-2.5 h-2.5" />
        ${{ product.price }}
      </span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
