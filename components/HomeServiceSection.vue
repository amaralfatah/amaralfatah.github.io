<template>
  <section class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div class="card-base">
      <WebhookIcon class="w-8 h-8 mb-4" />
      <h3 class="mb-2 text-xl font-medium">Web Development</h3>
      <p class="text-mygray">
        Custom web applications built with modern technologies and best
        practices.
      </p>
    </div>
    <div class="card-base">
      <SmartphoneIcon class="w-8 h-8 mb-4" />
      <h3 class="mb-2 text-xl font-medium">Mobile-First Design</h3>
      <p class="text-mygray">
        Responsive applications that work seamlessly across all devices.
      </p>
    </div>
    <div class="card-base">
      <CodeIcon class="w-8 h-8 mb-4" />
      <h3 class="mb-2 text-xl font-medium">API Development</h3>
      <p class="text-mygray">
        Scalable and secure APIs that power your applications.
      </p>
    </div>
    <div class="card-base">
      <SearchIcon class="w-8 h-8 mb-4" />
      <h3 class="mb-2 text-xl font-medium">Technical Consultation</h3>
      <p class="text-mygray">
        Expert advice on architecture, technology stack, and best practices.
      </p>
    </div>
  </section>
</template>

<script setup>
import {
  WebhookIcon,
  SmartphoneIcon,
  CodeIcon,
  SearchIcon,
  MailIcon,
} from "lucide-vue-next";
</script>

<style></style>
