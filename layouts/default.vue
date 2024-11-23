<template>
  <div class="w-full min-h-screen bg-myblack text-mywhite">
    <div class="flex max-w-4xl gap-12 px-8 mx-auto">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Main Content -->
      <slot />
    </div>
  </div>
</template>
