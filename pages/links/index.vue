<!-- pages/links/index.vue -->
<template>
  <main class="flex flex-col gap-8">
    <!-- Header Section -->
    <Header
      :id="header"
      :title="'Links'"
      :subtitle="'Quicklinks to my social platforms and projects.'"
    />
    <section class="flex flex-col items-center gap-2 md:hidden">
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
      <h2 class="text-2xl font-bold">Amar Al Fatah</h2>
      <span>Software Engineer &amp; Freelancer</span>
    </section>

    <!-- Links Section -->
    <section class="flex flex-col gap-16">
      <div class="flex flex-col w-full gap-4">
        <!-- Latest Video Section -->
        <div class="flex flex-col gap-3 card-base">
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
          <div class="overflow-hidden rounded-md aspect-video">
            <lite-youtube
              videoid="uAQpOmr3AKk"
              params="web-share;"
              style="
                background-image: url('https://i.ytimg.com/vi_webp/uAQpOmr3AKk/sddefault.webp');
              "
            >
              <iframe
                class="w-full h-full"
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
    </section>
  </main>
</template>

<script setup>
import socials from "@/data/socials.json";

useHead({
  title: "Links - Amar Al Fatah",
});
</script>

<style scoped>
/* Tambahkan style khusus jika dibutuhkan */
</style>
