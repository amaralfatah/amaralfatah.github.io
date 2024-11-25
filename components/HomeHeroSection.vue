<template>
  <section class="flex flex-col gap-8">
    <div class="flex items-center gap-4">
      <div class="block md:hidden">
        <img
          alt="Your Name"
          loading="eager"
          width="56"
          height="56"
          class="rounded-full"
          src="../assets/img/avatar.jpeg"
        />
      </div>
      <h1 class="text-3xl font-bold">Software Engineer & Freelancer</h1>
    </div>
    <p>
      I craft high-performance web applications and help businesses scale their
      digital presence. With expertise in Vue.js, React, and Node.js, I
      transform ideas into elegant solutions.
    </p>
    <div class="flex gap-4">
      <NuxtLink
        to="/#connect"
        class="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Let's Work Together
      </NuxtLink>
      <a
        href="https://flowcv.com/resume/6afsv73o4s"
        target="_blank"
        rel="noopener noreferrer"
        class="px-6 py-3 border rounded-lg border-mygray hover:border-mywhite"
      >
        Download Resume
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
