<!-- components/BaseSection.vue -->
<template>
  <section :id="id" class="flex flex-col gap-4">
    <div
      class="pb-3 transition-all duration-300 bg-transparent border-b border-mygray/10 hover:border-mygray/50"
    >
      <span class="font-medium text-mywhite">{{ title }}</span>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
    <slot></slot>
  </section>
</template>

<script setup>
defineProps({
  id: String,
  title: {
    type: String,
    required: true,
  },
  subtitle: String,
});
</script>
