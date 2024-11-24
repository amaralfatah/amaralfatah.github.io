<!-- layouts/default.vue -->
<template>
  <div class="w-full min-h-screen text-mywhite">
    <!-- Mobile Navigation -->
    <Navbar />

    <!-- Main Content -->
    <div class="flex w-full max-w-4xl min-h-screen gap-12 px-8 mx-auto">
      <!-- Desktop Sidebar -->
      <Sidebar />

      <!-- Page Content -->
      <div
        class="flex flex-col w-full gap-16 py-8 overflow-visible h-min md:gap-24 md:py-20"
      >
        <!-- Main Content -->
        <slot />

        <!-- Footer - Gunakan v-show untuk handling visibility -->
        <Footer ref="footerRef" v-show="showFooter" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// State untuk mengontrol visibility footer
const showFooter = ref(false);
const footerRef = ref(null);

// Handle mounting
onMounted(() => {
  // Set footer visible setelah mounted
  showFooter.value = true;
});
</script>
