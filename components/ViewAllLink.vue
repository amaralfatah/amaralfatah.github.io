<!-- components/ViewAllLink.vue -->
<template>
  <a
    :href="href"
    class="flex items-center gap-1 transition-all duration-300 ease-in-out group text-low-contrast-text hover:text-high-contrast-text"
  >
    View all
    <span class="transition-transform group-hover:translate-x-1">
      <ArrowRightIcon class="w-4 h-4" />
    </span>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>
