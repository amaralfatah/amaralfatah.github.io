<template>
  <form
    @submit.prevent="subscribeToNewsletter"
    class="flex flex-col gap-4 md:flex-row"
  >
    <input
      type="email"
      v-model="email"
      placeholder="Enter your email"
      class="flex-1 input-base"
      required
    />
    <button
      type="submit"
      class="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 whitespace-nowrap"
    >
      Subscribe
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";

// Newsletter subscription
const email = ref("");
const subscribeToNewsletter = async () => {
  // Implement newsletter subscription logic
  console.log("Subscribe:", email.value);
};
</script>

<style></style>
