<!-- pages/links/index.vue -->
<template>
  <div class="flex flex-col gap-8">
    <!-- Header Section -->
    <div class="flex-col hidden gap-4 md:flex">
      <h1 class="text-3xl font-medium">Links</h1>
      <p>Quicklinks to my social platforms and projects.</p>
    </div>
    <div class="flex flex-col items-center gap-2 md:hidden">
      <img
        alt="Amar Al Fatah"
        loading="eager"
        width="72"
        height="72"
        decoding="async"
        class="rounded-full"
        src="/assets/img/avatar.jpeg"
        style="color: transparent"
      />
      <h2>Amar Al Fatah</h2>
      <span>Software Engineer, &amp; Freelancer</span>
    </div>

    <!-- Links Section -->
    <div class="flex flex-col gap-16">
      <div class="flex flex-col w-full gap-4">
        <!-- Latest Video Section -->
        <div
          class="flex flex-col gap-3 p-4 border-2 rounded-md border-zinc-800 bg-zinc-900"
        >
          <div class="flex items-center justify-between">
            <span>Latest Video</span>
            <a
              class="flex items-center gap-1 text-sm text-low-contrast-text hover:text-high-contrast-text hover:opacity-90"
              href="https://www.youtube.com/watch?v=JwaWMLdM-ns"
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
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/JwaWMLdM-ns?si=BoH2U6a1dg3J6SIQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </lite-youtube>
          </div>
        </div>

        <!-- Social Cards Section -->
        <SocialCard
          v-for="social in socials"
          :key="social.id"
          :social="social"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import socials from "@/data/socials.json";
</script>

<style scoped>
/* Tambahkan style khusus jika dibutuhkan */
</style>
