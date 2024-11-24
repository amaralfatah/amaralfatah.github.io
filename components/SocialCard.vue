<!-- components/SocialCard.vue -->
<template>
  <div
    class="flex items-center justify-between w-full gap-4 px-6 py-4 transition-shadow border-2 rounded-md border-zinc-800 bg-zinc-900 hover:shadow-lg"
  >
    <div class="flex items-center gap-6">
      <!-- Dynamic Icon from Lucide -->
      <component :is="icons[social.icon]" class="text-mygray w-7 h-7" />
      <div class="flex flex-col">
        <span>{{ social.name }}</span>
        <span class="text-sm text-mygray">{{ social.description }}</span>
      </div>
    </div>
    <a
      :href="social.url"
      class="flex items-center px-6 py-2 border rounded-md border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:text-mywhite"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{{ social.action }}</span>
    </a>
  </div>
</template>

<script setup>
import {
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Mail,
  Link,
} from "lucide-vue-next";

// Mapping nama icon ke komponen
const icons = {
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
  mail: Mail,
  link: Link,
};

// Props untuk data sosial media
defineProps({
  social: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Tambahkan style tambahan jika dibutuhkan */
</style>
