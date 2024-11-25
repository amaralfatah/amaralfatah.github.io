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
      <h1 class="text-xl font-bold md:text-3xl">
        Software Engineer & Freelancer
      </h1>
    </div>
    <p class="max-w-xl">
      I craft high-performance web applications and help businesses scale their
      digital presence. With expertise in Vue.js, React, and Node.js, I
      transform ideas into elegant solutions.
    </p>
    <div class="flex gap-4">
      <NuxtLink
        to="/#connect"
        class="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Let's Work Together
      </NuxtLink>
      <a
        href="https://flowcv.com/resume/6afsv73o4s"
        target="_blank"
        rel="noopener noreferrer"
        class="px-6 py-3 border border-gray-400 rounded-lg hover:border-gray-200"
      >
        Download Resume
      </a>
    </div>
  </section>
</template>
