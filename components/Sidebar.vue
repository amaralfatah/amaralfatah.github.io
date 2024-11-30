<!-- components/Sidebar.vue -->
<template>
  <aside class="sticky top-0 hidden w-48 h-screen py-20 md:block">
    <nav
      class="flex flex-col w-full h-full gap-12"
      aria-label="Desktop navigation"
    >
      <!-- Profile Section -->
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

      <!-- Navigation Links -->
      <ul class="flex flex-col gap-4 list-none">
        <li v-for="item in navItems" :key="item.path">
          <nuxt-link
            :to="item.path"
            class="flex items-center gap-2 py-1 transition-colors text-mygray hover:text-mywhite"
            :class="{ 'text-mywhite': route.path === item.path }"
          >
            <span>{{ item.label }}</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <p>
      Jumlah Kunjungan : <span>{{ visitorCount }}</span>
    </p>
  </aside>
</template>

<script setup>
import { ref, onMounted } from "vue";
import database from "~/plugins/firebase"; // Ubah import sesuai export default
import { ref as dbRef, onValue, increment, set, get } from "firebase/database";

// Data navigasi
const navItems = [
  { path: "/", label: "Home" },
  { path: "/portfolios", label: "Portfolio" },
  { path: "/links", label: "Connection" },
  { path: "/stacks", label: "Technology" },
  { path: "/drops", label: "Product" },
  { path: "/journeys", label: "Journey" },
  { path: "/#connect", label: "Contact" },
];

// Computed property untuk active route
const route = useRoute();

// Visitor tracking dengan Firebase
const visitorCount = ref(0);
const visitorsRef = dbRef(database, "visitors");

onMounted(async () => {
  if (process.client) {
    // Tambahkan pengecekan ini
    // Cek apakah sudah mengunjungi hari ini
    const today = new Date().toISOString().split("T")[0];
    const hasVisitedToday = localStorage.getItem(`visited_${today}`);

    if (!hasVisitedToday) {
      // Increment total visitors
      const snapshot = await get(visitorsRef);
      const currentCount = snapshot.val() || 0;
      await set(visitorsRef, currentCount + 1);

      // Set flag kunjungan hari ini
      localStorage.setItem(`visited_${today}`, "true");
    }

    // Listen untuk updates
    onValue(visitorsRef, (snapshot) => {
      visitorCount.value = snapshot.val() || 0;
    });
  }
});
</script>
