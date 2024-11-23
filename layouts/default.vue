<template>
  <div class="w-full bg-yellow-300">
    <div class="flex w-1/2 h-screen mx-auto bg-red-300">
      <Sidebar class="w-64 border-r border-gray-800" />
      <main class="flex-1 p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
