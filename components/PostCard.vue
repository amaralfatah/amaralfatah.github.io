<!-- components/PostCard.vue -->
<template>
  <a
    :href="post.href"
    class="flex items-center gap-4 py-6 no-underline transition-all duration-200 rounded-md hover:bg-sidebar-bg hover:border-ui-component-default hover:px-3 hover:-mx-3"
  >
    <div
      class="flex flex-col items-start justify-between w-full gap-1 md:flex-row md:items-center"
    >
      <span>{{ post.title }}</span>
      <span class="text-sm font-regular text-low-contrast-text">{{
        post.date
      }}</span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
