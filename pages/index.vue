<!-- pages/index.vue -->
<template>
  <main class="flex flex-col gap-16">
    <!-- Hero Section -->
    <HomeHeroSection />

    <!-- About Section -->
    <BaseSection id="about" title="About" subtitle="My journey and expertise">
      <HomeAboutSection />
    </BaseSection>

    <!-- Experience Section -->
    <!-- <BaseSection
      id="experience"
      title="Experience"
      subtitle="My professional journey"
    >
      <ExperienceTimeline />
    </BaseSection> -->

    <!-- Services Section -->
    <BaseSection
      id="services"
      title="Services"
      subtitle="Specialized solutions I offer"
    >
      <HomeServiceSection />
    </BaseSection>

    <!-- Featured Projects Section -->
    <BaseSection
      id="projects"
      title="Featured Projects"
      subtitle="Selected works I'm proud of"
    >
      <HomeProjectSection />
    </BaseSection>

    <!-- Testimonials Section -->
    <BaseSection
      id="testimonials"
      title="Client Testimonials"
      subtitle="What clients say about my work"
    >
      <TestimonialsSlider />
    </BaseSection>

    <!-- Newsletter Section -->
    <BaseSection
      id="newsletter"
      title="Newsletter"
      subtitle="Get development tips and insights directly to your inbox"
    >
      <HomeNewsLetterSection />
    </BaseSection>

    <!-- Connect Section -->
    <BaseSection
      id="connect"
      title="Let's Connect"
      subtitle="Got a project in mind? Let's talk about it"
    >
      <HomeConnectSection />
    </BaseSection>
  </main>
</template>

<script setup>
useHead({
  title: "Amar Al Fatah",
});
</script>
