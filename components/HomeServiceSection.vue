<template>
  <section class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div class="card-base">
      <WebhookIcon class="w-8 h-8 mb-4" />
      <h3 class="mb-2 text-xl font-medium">Website</h3>
      <p class="text-mygray">Modern web apps built with best practices.</p>
    </div>
    <div class="card-base">
      <SmartphoneIcon class="w-8 h-8 mb-4" />
      <h3 class="mb-2 text-xl font-medium">Mobile</h3>
      <p class="text-mygray">
        Responsive apps for seamless device compatibility.
      </p>
    </div>
    <div class="card-base">
      <CodeIcon class="w-8 h-8 mb-4" />
      <h3 class="mb-2 text-xl font-medium">API</h3>
      <p class="text-mygray">Scalable, secure APIs for your apps.</p>
    </div>
    <div class="card-base">
      <SearchIcon class="w-8 h-8 mb-4" />
      <h3 class="mb-2 text-xl font-medium">Consultation</h3>
      <p class="text-mygray">Expert advice on tech and architecture.</p>
    </div>
  </section>
</template>

<script setup>
import {
  WebhookIcon,
  SmartphoneIcon,
  CodeIcon,
  SearchIcon,
} from "lucide-vue-next";
</script>

<style></style>
