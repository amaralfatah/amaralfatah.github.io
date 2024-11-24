<template>
  <div class="flex flex-col gap-8">
    <!-- Header Section -->
    <div class="flex-col hidden gap-4 md:flex">
      <h1 class="text-3xl font-medium">Links</h1>
      <p>Quicklinks to my social platforms and projects.</p>
    </div>
    <div class="flex flex-col items-center gap-2 md:hidden">
      <img
        alt="Cole Caccamise"
        loading="eager"
        width="72"
        height="72"
        decoding="async"
        class="rounded-full"
        src="#"
        style="color: transparent"
      />
      <h2>Cole Caccamise</h2>
      <span>Solopreneur, Software Engineer, &amp; Designer</span>
    </div>

    <!-- Links Section -->
    <div class="flex flex-col gap-16">
      <div class="flex flex-col w-full gap-4">
        <!-- Latest Video Section -->
        <div
          class="flex flex-col gap-3 p-4 border-2 border-gray-200 rounded-md dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900"
        >
          <div class="flex items-center justify-between">
            <span>Latest Video</span>
            <a
              class="flex items-center gap-1 text-sm text-low-contrast-text hover:text-high-contrast-text hover:opacity-90"
              href="https://youtu.be/uAQpOmr3AKk"
            >
              <span>YouTube</span>
              <LucideArrowRight class="w-4 h-4" />
            </a>
          </div>
          <div class="overflow-hidden rounded-md">
            <lite-youtube
              videoid="uAQpOmr3AKk"
              params="web-share;"
              style="
                background-image: url('https://i.ytimg.com/vi_webp/uAQpOmr3AKk/sddefault.webp');
              "
            >
              <button type="button" class="lty-playbtn">
                <span class="lyt-visually-hidden">Play</span>
              </button>
              <noscript>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/2nx11P41xtY?si=OApGklgBTTkY791o"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </noscript>
            </lite-youtube>
          </div>
        </div>

        <!-- Social Cards Section -->
        <SocialCard
          v-for="social in socialLinks"
          :key="social.id"
          :social="social"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  LucideArrowRight,
  LucideMail,
  LucideTwitter,
  LucideGithub,
  LucideYoutube,
  LucideDroplet,
} from "lucide-vue-next";
import SocialCard from "~/components/SocialCard.vue";

const socialLinks = [
  {
    id: 1,
    title: "Weekly Newsletter",
    description: "Insights on how I run my one-person business.",
    action: "Read",
    url: "/letters?via=links",
    icon: LucideMail,
  },
  {
    id: 2,
    title: "Twitter / X",
    description: "Sharing what I'm working on.",
    action: "Follow",
    url: "https://caccamise.link/x",
    icon: LucideTwitter,
  },
  {
    id: 3,
    title: "YouTube",
    description: "Aesthetic tech videos.",
    action: "Subscribe",
    url: "https://caccamise.link/youtube",
    icon: LucideYoutube,
  },
  {
    id: 4,
    title: "GitHub",
    description: "Building software and tools.",
    action: "Visit",
    url: "https://git.new/cole",
    icon: LucideGithub,
  },
  {
    id: 5,
    title: "Drops",
    description: "Wallpapers, Notion templates, and more.",
    action: "Browse",
    url: "https://colecaccamise.com/drops?via=links",
    icon: LucideDroplet,
  },
];
</script>

<style scoped>
/* Tambahkan style khusus jika dibutuhkan */
</style>
