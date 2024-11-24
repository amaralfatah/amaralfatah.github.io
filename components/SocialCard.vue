<!-- components/SocialCard.vue -->
<template>
  <div
    class="flex items-center justify-between w-full gap-4 px-6 py-4 border-2 border-gray-200 rounded-md dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900"
  >
    <div class="flex items-center gap-6">
      <!-- Dynamic Icon from Lucide -->
      <component :is="social.icon" class="text-mygray w-7 h-7" />
      <div class="flex flex-col">
        <span>{{ social.title }}</span>
        <span class="text-sm text-mygray">{{ social.description }}</span>
      </div>
    </div>
    <a
      class="flex items-center px-6 py-2 border border-gray-200 rounded-md dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800"
      :href="social.url"
    >
      <span>{{ social.action }}</span>
    </a>
  </div>
</template>

<script setup>
defineProps({
  social: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Tambahkan style khusus jika dibutuhkan */
</style>
