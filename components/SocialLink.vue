<!-- components/SocialLink.vue -->
<template>
  <a
    :href="social.url"
    class="flex items-center justify-center w-12 h-12 border border-gray-200 rounded-md text-mygray dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 hover:text-mywhite hover:border-gray-700 dark:hover:border-gray-600"
    target="_blank"
    rel="noopener noreferrer"
  >
    <component :is="icons[social.icon]" class="w-5 h-5" />
  </a>
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
