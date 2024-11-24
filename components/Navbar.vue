<template>
  <nav
    class="block w-full px-6 py-4 border-b border-mygray md:hidden"
    aria-label="Mobile navigation"
  >
    <div class="flex items-center justify-between w-full">
      <NuxtLink class="flex flex-col select-none hover:opacity-90" to="/">
        <span class="text-lg font-bold text-mywhite">Amar Al Fatah</span>
        <span class="text-sm text-mygray">Software Engineer</span>
      </NuxtLink>
      <button
        @click="toggleMobileMenu"
        class="flex items-center justify-center w-10 h-10 transition-all border rounded-md pointer-cursor z-1 border-mygray text-mygray hover:border-mywhite hover:text-high-contrast-text"
      >
        <Icon icon="heroicons-outline:menu" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <ul
        v-if="isMobileMenuOpen"
        class="absolute left-0 top-[73px] z-10 flex w-full list-none flex-col items-center gap-4 bg-myblack py-4"
      >
        <li v-for="link in menuLinks" :key="link.href" class="w-full">
          <NuxtLink
            :to="link.href"
            class="flex items-center gap-2 px-6 py-3 hover:text-high-contrast-text"
            :class="
              $route.path === link.href
                ? ' text-high-contrast-text'
                : 'text-mygray'
            "
          >
            <span>{{ link.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const isMobileMenuOpen = ref(false);

const menuLinks = [
  { href: "/", name: "Home" },
  { href: "/portfolios", name: "Portfolios" },
  { href: "/links", name: "Links" },
  { href: "/#connect", name: "Contact" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
