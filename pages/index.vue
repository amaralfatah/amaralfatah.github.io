<template>
  <div
    class="flex flex-col w-full gap-16 py-8 overflow-visible h-min md:gap-24 md:py-20"
  >
    <main class="flex flex-col gap-16 md:gap-24">
      <!-- About Section -->
      <div class="flex flex-col gap-4 mb-12">
        <div class="block md:hidden">
          <img
            src="../assets/img/avatar.jpeg"
            alt="Amar Al Fatah"
            class="rounded-full"
            width="56"
            height="56"
          />
        </div>
        <div class="flex flex-col gap-2">
          <span class="font-medium">About</span>
          <p class="text-mygray">
            I am a passionate software engineer with expertise in web
            development using modern technologies like Vue.js, Nuxt.js, and
            Tailwind CSS.
          </p>
          <p class="text-mygray">
            In my free time, I enjoy writing tech articles, building side
            projects, and exploring new technologies.
          </p>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="flex flex-col gap-4 mb-12">
        <div class="flex flex-col gap-2">
          <span class="font-medium">The Letter</span>
          <p class="text-mygray">
            Documenting the process of building my
            <a href="#" class="underline hover:text-mywhite"
              >one person businesses</a
            >. Sharing lessons I learn and interesting resources I find.
          </p>
        </div>
        <div class="flex max-w-xl gap-4">
          <input
            type="email"
            placeholder="Your email"
            class="flex-1 px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            class="px-6 py-3 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
          >
            Join For Free
          </button>
        </div>
      </div>

      <!-- Ventures Section -->
      <div class="flex flex-col gap-4 mb-12">
        <div class="flex flex-col gap-2">
          <span class="font-medium">Ventures</span>
          <p class="text-mygray">Projects I'm working on</p>
        </div>
        <div>
          <a href="#" class="block mb-2 group">
            <h3 class="inline-flex items-center text-xl text-mywhite">
              YouTube | Cole Caccamise
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 ml-1 transition-transform transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </h3>
          </a>
          <p class="text-mygray">Aesthetic tech videos.</p>
        </div>
      </div>

      <!-- Featured Drops Section -->
      <div class="flex flex-col gap-4 mb-12">
        <div class="flex flex-col gap-2">
          <span class="font-medium">Featured Drops</span>
          <p class="text-mygray">
            Premium digital products I've created recently
          </p>
        </div>
        <div class="grid gap-6 mb-6">
          <div
            v-for="product in products"
            :key="product.title"
            class="flex items-center gap-4"
          >
            <div class="w-16 h-16 overflow-hidden rounded-xl">
              <img
                :src="'/api/placeholder/64/64'"
                :alt="product.title"
                class="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 class="font-medium text-mywhite">{{ product.title }}</h3>
              <p class="text-mygray">
                {{ product.category }} · {{ product.price }}
              </p>
            </div>
          </div>
        </div>
        <NuxtLink
          to="/drops"
          class="inline-flex items-center text-mygray hover:text-mywhite group"
        >
          View all
          <span
            class="ml-1 transition-transform transform group-hover:translate-x-1"
            >→</span
          >
        </NuxtLink>
      </div>

      <!-- Featured Letters Section -->
      <div class="flex flex-col gap-4 mb-12">
        <div class="flex flex-col gap-2">
          <span class="font-medium">Featured Letters</span>
          <p class="text-mygray">Recent posts from my newsletter</p>
        </div>
        <div class="mb-6 space-y-6">
          <article
            v-for="post in posts"
            :key="post.title"
            class="flex items-center justify-between"
          >
            <NuxtLink :to="post.path" class="text-mywhite hover:text-mygray">{{
              post.title
            }}</NuxtLink>
            <span class="text-mygray">{{ post.date }}</span>
          </article>
        </div>
        <NuxtLink
          to="/letters"
          class="inline-flex items-center text-mygray hover:text-mywhite group"
        >
          View all
          <span
            class="ml-1 transition-transform transform group-hover:translate-x-1"
            >→</span
          >
        </NuxtLink>
      </div>

      <!-- Stack Section -->
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <span class="font-medium">Stack</span>
          <p class="text-mygray">Tools and products I use daily</p>
        </div>
        <div class="mb-6 space-y-8">
          <div v-for="item in stackItems" :key="item.title">
            <h3 class="mb-2 text-xl text-mywhite">{{ item.title }}</h3>
            <p class="text-mygray">{{ item.description }}</p>
          </div>
        </div>
        <NuxtLink
          to="/stack"
          class="inline-flex items-center text-mygray hover:text-mywhite group"
        >
          View all
          <span
            class="ml-1 transition-transform transform group-hover:translate-x-1"
            >→</span
          >
        </NuxtLink>
      </div>

      <!-- Connect Section -->
      <section class="mb-20">
        <h2 class="mb-4 text-2xl font-medium text-white">Connect</h2>
        <p class="mb-6 text-gray-400">
          Reach me directly at
          <a
            href="mailto:cole@colecaccamise.com"
            class="text-white hover:text-gray-300"
          >
            cole@colecaccamise.com
          </a>
          or connect on social media below.
        </p>
        <p class="mb-8 text-gray-400">
          I'm available and looking for new opportunities.
        </p>

        <div class="flex gap-4">
          <a
            href="#"
            class="p-3 transition-colors bg-gray-900 rounded-lg hover:bg-gray-800"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="p-3 transition-colors bg-gray-900 rounded-lg hover:bg-gray-800"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="p-3 transition-colors bg-gray-900 rounded-lg hover:bg-gray-800"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
              />
            </svg>
          </a>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="flex justify-center">
      <span class="text-sm text-mygray">© 2024 Amar Al Fatah</span>
    </footer>
  </div>
</template>

<script setup>
const featuredArticles = [
  {
    title: "Getting Started with Nuxt.js",
    description:
      "Learn how to build modern web apps with Nuxt.js and Tailwind CSS.",
    image: "/article1.jpg",
    path: "/articles/getting-started-with-nuxtjs",
  },
  {
    title: "Mastering Vue Composition API",
    description: "Discover the power of the Composition API in Vue.js.",
    image: "/article2.jpg",
    path: "/articles/mastering-vue-composition-api",
  },
];

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Nuxt and Tailwind CSS.",
    image: "/project1.jpg",
  },
  {
    title: "E-commerce App",
    description: "An e-commerce app powered by Vue.js and Stripe.",
    image: "/project2.jpg",
  },
  {
    title: "Task Manager",
    description: "A task management app built with Vue.js and Firebase.",
    image: "/project3.jpg",
  },
];

const products = [
  {
    title: "Wave Wallpapers",
    category: "Wallpapers",
    price: "$9",
  },
  {
    title: "Prism Wallpapers",
    category: "Wallpapers",
    price: "$9",
  },
  {
    title: "Gradient Wallpapers",
    category: "Wallpapers",
    price: "$9",
  },
];

const posts = [
  {
    title: "How to Love Learning",
    date: "November 17, 2024",
    path: "/letters/how-to-love-learning",
  },
  {
    title: "Slow Growth",
    date: "November 10, 2024",
    path: "/letters/slow-growth",
  },
  {
    title: "Start When You're Not Ready",
    date: "November 3, 2024",
    path: "/letters/start-when-not-ready",
  },
];

const stackItems = [
  {
    title: "Desk Setup",
    description: "My main workspace.",
  },
  {
    title: "Development Stack",
    description:
      "All of the apps, tools, and services I use to build my projects.",
  },
  {
    title: "VSCode/Cursor Setup",
    description: "The extensions, theme, and settings I use.",
  },
];
</script>
