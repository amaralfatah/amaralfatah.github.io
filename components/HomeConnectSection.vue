<template>
  <section class="flex flex-col w-full gap-4">
    <ContactForm />
    <div class="flex flex-col gap-4">
      <p class="text-mygray">Or reach me directly at:</p>
      <div class="flex gap-4">
        <a
          href="mailto:your.email@example.com"
          class="flex items-center gap-2 text-blue-500 hover:text-blue-400"
        >
          <MailIcon class="w-5 h-5" />
          your.email@example.com
        </a>
      </div>
      <div class="flex gap-4 mt-4">
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

<style></style>
