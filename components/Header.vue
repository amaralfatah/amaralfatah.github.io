<template>
  <section id="{{ id }}" class="flex-col hidden gap-4 md:flex">
    <h1 class="text-3xl font-medium">{{ title }}</h1>
    <p>{{ subtitle }}</p>
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
