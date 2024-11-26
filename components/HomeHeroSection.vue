<template>
  <section class="flex flex-col gap-8">
    <div class="flex items-center gap-4">
      <img
        alt="Your Name"
        class="block rounded-full md:hidden"
        src="../assets/img/avatar.jpeg"
        width="56"
        height="56"
      />
      <h1 class="text-xl font-bold md:text-3xl">Mobile & Web Developer</h1>
    </div>
    <p class="max-w-xl">
      I create mobile and web apps using Flutter and Laravel, delivering
      efficient and quality solutions on time and budget.
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
        class="px-6 py-3 border rounded-lg hover:border-gray-200"
      >
        Download Resume
      </a>
    </div>
  </section>
</template>
