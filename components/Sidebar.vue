<!-- components/Sidebar.vue -->
<template>
  <aside class="sticky top-0 hidden w-48 h-screen py-20 md:block">
    <nav
      class="flex flex-col w-full h-full gap-12"
      aria-label="Desktop navigation"
    >
      <div class="flex flex-col items-start w-full gap-4 text-left">
        <img
          src="../assets/img/avatar.jpeg"
          alt="Amar Al Fatah"
          class="rounded-full"
          width="72"
          height="72"
        />
        <div>
          <span class="text-lg font-medium">Amar Al Fatah</span>
          <p class="text-mygray">Software Engineer</p>
        </div>
      </div>
      <ul class="flex flex-col gap-4 list-none">
        <li>
          <NuxtLink
            to="/"
            class="flex items-center gap-2 py-1 text-mywhite hover:text-mywhite"
          >
            <span>Home</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/portfolios"
            class="flex items-center gap-2 py-1 text-mygray hover:text-mywhite"
          >
            <span>Portfolio</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/drops"
            class="flex items-center gap-2 py-1 text-mygray hover:text-mywhite"
          >
            <span>Drops</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/stack"
            class="flex items-center gap-2 py-1 text-mygray hover:text-mywhite"
          >
            <span>Stack</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/vault"
            class="flex items-center gap-2 py-1 text-mygray hover:text-mywhite"
          >
            <span>Vault</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/links"
            class="flex items-center gap-2 py-1 text-mygray hover:text-mywhite"
          >
            <span>Links</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="#connect"
            class="flex items-center gap-2 py-1 text-mygray hover:text-mywhite"
          >
            <span>Contact</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
