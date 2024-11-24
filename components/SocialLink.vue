<!-- components/SocialLink.vue -->
<template>
  <a
    :href="social.url"
    class="flex items-center justify-center w-12 h-12 border rounded-md text-mygray border-zinc-800 bg-zinc-900 hover:text-mywhite hover:border-gray-600"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon :icon="icons[social.icon]" class="w-5 h-5" />
  </a>
</template>

<script setup>
import { Icon } from "@iconify/vue";

// Mapping nama icon ke nama Iconify
const icons = {
  twitter: "ri:twitter-fill",
  instagram: "ri:instagram-fill",
  linkedin: "ri:linkedin-fill",
  github: "ri:github-fill",
  youtube: "ri:youtube-fill",
  mail: "ri:mail-fill",
  link: "ri:link",
  tiktok: "ri:tiktok-fill",
};

defineProps({
  social: {
    type: Object,
    required: true,
  },
});
</script>
