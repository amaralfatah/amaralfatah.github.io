<template>
  <nav
    class="block w-full px-8 py-4 border-b border-borders-non-interactive md:hidden"
    aria-label="Mobile navigation"
  >
    <div class="flex items-center justify-between w-full">
      <NuxtLink class="flex flex-col select-none hover:opacity-90" to="/">
        <span class="text-mywhite">Amar Al Fatah</span>
        <span class="text-mygray">Software Engineer</span>
      </NuxtLink>
      <button
        @click="toggleMobileMenu"
        class="flex items-center justify-center w-12 h-12 transition-all border rounded-md pointer-cursor z-1 border-borders-non-interactive bg-myblack text-mygray hover:border-subtle-borders-interactive hover:bg-ui-component-default hover:text-high-contrast-text"
      >
        <MenuIcon class="w-5 h-5" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <ul
      class="absolute left-0 top-[81px] z-10 flex w-full list-none flex-col items-center gap-4 bg-myblack py-4"
      :class="{
        'max-h-0 opacity-0': !isMobileMenuOpen,
        'max-h-screen opacity-100': isMobileMenuOpen,
      }"
      style="overflow: hidden"
    >
      <li
        v-for="link in menuLinks"
        :key="link.href"
        class="transition-opacity duration-300 ease-in-out delay-50"
        :class="{ 'opacity-0': !isMobileMenuOpen }"
      >
        <NuxtLink
          :to="link.href"
          class="flex items-center gap-2 py-1 hover:text-high-contrast-text"
          :class="
            $route.path === link.href
              ? 'text-high-contrast-text'
              : 'text-mygray'
          "
        >
          <span>{{ link.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { MenuIcon } from "lucide-vue-next";

const isMobileMenuOpen = ref(false);

const menuLinks = [
  { href: "/", name: "Home" },
  { href: "/letters", name: "Letters" },
  { href: "/drops", name: "Drops" },
  { href: "/stack", name: "Stack" },
  { href: "/vault", name: "Vault" },
  { href: "/links", name: "Links" },
  { href: "/#connect", name: "Contact" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
