<template>
  <section class="flex flex-col w-full gap-4 p-4 sm:p-6 lg:p-8">
    <!-- Contact Form -->
    <ContactForm />

    <!-- Contact Information Section -->
    <div class="flex flex-col gap-4">
      <p class="text-center text-mygray sm:text-left">
        Or reach me directly at:
      </p>

      <!-- Email -->
      <div class="flex justify-center gap-4 sm:justify-start">
        <a
          href="mailto:amaralfatah.me@gmail.com"
          class="flex items-center gap-2 text-blue-500 hover:text-blue-400"
        >
          <MailIcon class="w-5 h-5" />
          amaralfatah.me@gmail.com
        </a>
      </div>

      <!-- Social Links -->
      <div class="flex flex-wrap justify-center gap-3 mt-4 sm:justify-start">
        <SocialLink
          v-for="social in socials"
          :key="social.id"
          :social="social"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import socials from "@/data/socials.json";
</script>

<style scoped>
/* Custom styles if necessary */
</style>
