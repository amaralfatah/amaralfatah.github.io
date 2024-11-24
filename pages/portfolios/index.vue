<!-- pages/vault.vue -->
<template>
  <div class="flex flex-col gap-16">
    <!-- Header -->
    <div class="flex flex-col gap-4">
      <h1 class="text-3xl font-medium">Vault</h1>
      <p>
        Links to valuable resources I've come across. More added all the time.
      </p>
    </div>

    <!-- Resource Grid -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <ResourceCard
        v-for="resource in resources"
        :key="resource.id"
        :resource="resource"
      />
    </div>
  </div>
</template>

<script setup>
// Data resources
const resources = [
  {
    id: 1,
    title: "UE5 Beginner Tutorial",
    description:
      "A fantastic video series on UE5. I had a lot of fun going through this one.",
    image: "https://i.ytimg.com/vi/bDUFB1ng00Q/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=L9qixi858Ag&list=PLIn-yd4vnXbjWeYqU7epakdnVzoysMToy",
  },
  {
    id: 2,
    title: "Dub.co",
    description: "Create powerful short links.",
    image: "https://assets.dub.co/thumbnail.jpg",
    href: "https://refer.dub.co/colecaccamise",
  },
  {
    id: 3,
    title: "How to Validate Any SaaS Idea",
    description: "A must-watch for any aspiring SaaS founder.",
    image: "https://i.ytimg.com/vi/aSMxdBVTcLg/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=aSMxdBVTcLg",
  },
  {
    id: 4,
    title: "Animations on the Web",
    description:
      "Currently going through this course. Teaches you how to create beautiful animations.",
    image: "https://animations.dev/opengraph-image-pwu6ef.png",
    href: "https://animations.dev",
  },
  // ...tambahkan resource lainnya
];
</script>

<script>
// Resource Card Component
const ResourceCard = defineComponent({
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  template: `
    <a 
      :href="resource.href"
      target="_blank"
      class="flex flex-col gap-3 p-4 transition-colors border-2 border-gray-200 rounded-md dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <div class="relative w-full pt-[56.25%]">
        <img 
          :alt="resource.title"
          :src="resource.image"
          class="absolute inset-0 object-cover w-full h-full rounded-md"
          loading="lazy"
        />
      </div>
      <div>
        <h3 class="text-lg font-medium">{{ resource.title }}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">{{ resource.description }}</p>
      </div>
    </a>
  `,
});
</script>
