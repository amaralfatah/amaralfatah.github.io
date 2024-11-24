<template>
  <div class="w-full min-h-screen text-mywhite">
    <!-- Mobile Navigation -->
    <Navbar />

    <!-- Main Content -->
    <div class="flex w-full max-w-4xl min-h-screen gap-12 px-8 mx-auto">
      <!-- Desktop Sidebar -->
      <Sidebar />

      <!-- Page Content -->
      <div
        class="flex flex-col w-full gap-16 py-8 overflow-visible h-min md:gap-24 md:py-20"
      >
        <!-- Main Content -->
        <slot />

        <!-- Footer -->
        <Footer />
      </div>
    </div>
  </div>
</template>
