<template>
  <main class="flex flex-col gap-16">
    <!-- Header Section -->
    <Header
        :id="header"
        :title="'Post'"
        :subtitle="'Tools & technologies I use to bring ideas to life.'"
    />

    <section class="flex flex-col gap-4">
      <NuxtLink
          to="/stacks/development"
          class="flex py-6 gap-4 items-center no-underline card-base"
      >
        <div class="flex flex-col">
          <span class="text-white font-medium">Development Stack</span>
          <span class="font-regular text-mygray">All of the apps, tools, and services I use to build my projects.</span>
        </div>
      </NuxtLink>
      <NuxtLink
          to="/stacks/chatgpt-lo-gue"
          class="flex py-6 gap-4 items-center no-underline card-base"
      >
        <div class="flex flex-col">
          <span class="text-white font-medium">ChatGPT Lo-Gue</span>
          <span class="font-regular text-mygray">ChatGPT can talk 'lo-gue' with custom instructions.</span>
        </div>
      </NuxtLink>
    </section>
  </main>
</template>

<script setup>
// Props atau reactive variables bisa ditambahkan di sini
const header = ref('stack-header')
</script>