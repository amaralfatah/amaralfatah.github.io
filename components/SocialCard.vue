<template>
  <div
    class="flex items-center justify-between w-full gap-4 px-6 py-4 transition-shadow border-2 rounded-md border-zinc-800 bg-zinc-900 hover:shadow-lg"
  >
    <div class="flex items-center gap-6">
      <!-- Menggunakan ikon dari Iconify -->
      <Icon :icon="icons[social.icon]" class="text-mygray w-7 h-7" />
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
