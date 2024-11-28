<!-- pages/index.vue -->
<template>
  <main class="flex flex-col gap-16">
    <Header
      :id="header"
      :title="'Journey'"
      :subtitle="'A little about my career journey'"
    />

    <!-- Experience Section -->
    <BaseSection
      id="experience"
      title="Experience"
      subtitle="My professional work journey"
    >
      <ExperienceTimeline />
    </BaseSection>

    <!-- Formal Section -->
    <BaseSection
      id="formal"
      title="Formal Education"
      subtitle="My formal education journey"
    >
      <FormalTimeline />
    </BaseSection>

    <!-- Non Formal Section -->
    <BaseSection
      id="non-formal"
      title="Non-Formal Education"
      subtitle="My non-formal education journey"
    >
      <NonFormalTimeline />
    </BaseSection>
  </main>
</template>

<script setup>
import FormalTimeline from "~/components/FormalTimeline.vue";

useHead({
  title: "Amar Al Fatah",
});
</script>
