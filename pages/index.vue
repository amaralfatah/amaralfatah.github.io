<!-- pages/index.vue -->
<template>
  <main class="flex flex-col gap-16 md:gap-24">
    <!-- About Section -->
    <div class="flex flex-col gap-4">
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
      <div class="flex flex-col gap-2">
        <span class="font-medium">About</span>
        <p>
          I'm a final year computer science student and software engineer
          intern.
        </p>
        <p>Developing and designing software is my passion.</p>
        <p>
          In my spare time I create tech videos on YouTube and build things for
          myself.
        </p>
      </div>
    </div>

    <!-- Newsletter Section -->
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <span class="font-medium">The Letter</span>
        <p>
          <span
            >Documenting the process of building my
            <u>one person businesses</u>. Sharing lessons I learn and
            interesting resources I find.</span
          >
        </p>
      </div>
      <form
        class="flex flex-col gap-4 p-0 bg-transparent border-0 rounded-md border-borders-non-interactive md:flex-row md:gap-0 md:border md:bg-ui-component-default md:p-2 md:pl-4"
      >
        <input
          placeholder="Your email"
          class="flex items-center justify-between w-full px-4 py-3 overflow-hidden text-sm bg-transparent border rounded-lg outline-none border-subtle-borders-interactive hover:border-stronger-borders-interactive-focus-rings md:border-none md:bg-app-bg md:px-0 dark:bg-ui-component-default font-regular text-high-contrast-text placeholder-low-contrast-text"
          required
          type="email"
        />
        <button type="submit" class="btn btn-primary md:h-[48px] md:w-[147px]">
          <div>Join For Free</div>
        </button>
      </form>
    </div>

    <!-- Project Section -->
    <div class="flex flex-col gap-4">
      <div class="pb-3 border-b border-gray-200 dark:border-gray-700">
        <span class="font-medium text-mywhite">Projects</span>
        <p class="text-mygray">Projects I'm working on</p>
      </div>
      <div class="flex flex-col gap-4">
        <div
          v-for="portfolio in portfolios.slice(0, 3)"
          :key="portfolio.id"
          class="flex flex-col"
        >
          <a
            target="_blank"
            class="flex items-center gap-4 py-6 no-underline transition-all duration-200 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 hover:px-3 hover:-mx-3"
            :href="portfolio.link"
          >
            <div class="flex flex-col gap-1">
              <span class="flex items-center gap-1">
                {{ portfolio.name }}
                <ExternalLinkIcon class="w-4 h-4" />
              </span>
              <span class="text-gray-500 dark:text-gray-400">
                {{ portfolio.description }}
              </span>
            </div>
          </a>
        </div>
        <ViewAllLink href="/portfolios" />
      </div>
    </div>

    <!-- Ventures Section -->
    <div class="flex flex-col gap-4">
      <div class="pb-3 border-b border-gray-200 dark:border-gray-700">
        <span class="font-medium">Ventures</span>
        <p>Projects I'm working on</p>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col">
          <a
            target="_blank"
            class="flex items-center gap-4 py-6 no-underline transition-all duration-200 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 hover:px-3 hover:-mx-3"
            href="https://youtube.com/@yourchannel"
          >
            <div class="flex flex-col gap-1">
              <span class="flex items-center gap-1">
                YouTube | Your Channel
                <ExternalLinkIcon class="w-4 h-4" />
              </span>
              <span class="text-gray-500 dark:text-gray-400"
                >Your channel description.</span
              >
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Featured Products Section -->
    <div class="flex flex-col gap-4">
      <div class="pb-3 border-b border-gray-200 dark:border-gray-700">
        <span class="font-medium">Featured Drops</span>
        <p>Premium digital products I've created recently</p>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
        <ViewAllLink href="/drops" />
      </div>
    </div>

    <!-- Featured Posts Section -->
    <div class="flex flex-col gap-4">
      <div class="pb-3 border-b border-gray-200 dark:border-gray-700">
        <span class="font-medium">Featured Letters</span>
        <p>Recent posts from my newsletter</p>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col">
          <PostCard v-for="post in posts" :key="post.id" :post="post" />
        </div>
        <ViewAllLink href="/letters" />
      </div>
    </div>

    <!-- Stack Section -->
    <div class="flex flex-col gap-4">
      <div class="pb-3 border-b border-gray-200 dark:border-gray-700">
        <span class="font-medium">Stack</span>
        <p>Tools and products I use daily</p>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col">
          <StackCard v-for="item in stack" :key="item.id" :item="item" />
        </div>
        <ViewAllLink href="/stack" />
      </div>
    </div>

    <!-- Connect Section -->
    <div id="connect" class="flex flex-col gap-4">
      <div>
        <span class="font-medium">Connect</span>
        <p>
          Reach me directly at
          <a class="text-blue-600 hover:opacity-90" href="mailto:your@email.com"
            >your@email.com</a
          >
          or connect on social media below.
        </p>
        <p>I'm available and looking for new opportunities.</p>
      </div>
      <div class="flex gap-4">
        <SocialLink
          v-for="social in socials"
          :key="social.id"
          :social="social"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ExternalLinkIcon } from "lucide-vue-next";
import avatarImage from "~/assets/img/avatar.jpeg";
import portfolios from "@/data/portfolios.json";

const products = [
  {
    id: 1,
    title: "Wave Wallpapers",
    type: "Wallpapers",
    price: 9,
    image: avatarImage,
    href: "/drops/wave",
  },
];

const posts = [
  {
    id: 1,
    title: "How to Love Learning",
    date: "November 17, 2024",
    href: "/letters/how-to-love-learning",
  },
];

const stack = [
  {
    id: 1,
    title: "Desk Setup",
    description: "My main workspace.",
    href: "/stack/setup",
  },
];

const socials = [
  {
    id: "linkedin",
    icon: "linkedin",
    href: "https://linkedin.com/in/amaralfatah",
  },
  {
    id: "mail",
    icon: "mail",
    href: "mailto:amaralfatah.me@gmail.com",
  },
  {
    id: "twitter",
    icon: "twitter",
    href: "https://twitter.com/amaralfatah",
  },
  {
    id: "instagram",
    icon: "instagram",
    href: "https://instagram.com/amaralfatah.me",
  },
  {
    id: "github",
    icon: "github",
    href: "https://github.com/amaralfatah",
  },
  {
    id: "youtube",
    icon: "youtube",
    href: "https://youtube.com/@amaralfatah447",
  },
];
</script>
