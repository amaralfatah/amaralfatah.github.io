<script setup>
import {ArrowLeft} from 'lucide-vue-next'

defineProps({
  url: {
    type: String,
    default: '/'
  },
})
</script>

<template>
  <a class="flex items-center group gap-1 no-underline text-mygray hover:text-mywhite"
     :href="url">
      <span class="group-hover:-translate-x-1 transition-transform">
        <ArrowLeft class="w-4 h-4"/>
      </span>
    Back
  </a>
</template>