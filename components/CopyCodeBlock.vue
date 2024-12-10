<!-- components/CopyCodeBlock.vue -->
<template>
  <div class="relative rounded-lg bg-[#121212] overflow-hidden w-full border border-[#2F2F2F]">
    <!-- Header -->
    <div class="flex justify-between items-center px-4 py-2.5 bg-[#1A1A1A] border-b border-[#2F2F2F]">
      <span class="text-[#989898] text-xs font-medium">{{ language }}</span>
      <button @click="copyCode" class="flex items-center gap-1.5 text-[#989898] hover:text-white transition-colors duration-200">
        <span class="text-xs font-medium">{{ copied ? 'Copied' : 'Copy code' }}</span>
        <Copy v-if="!copied" class="w-4 h-4" />
        <CheckCheck v-else class="w-4 h-4" />
      </button>
    </div>

    <!-- Code Content -->
    <div class="relative flex">
      <!-- Line Numbers -->
      <div class="hidden sm:block pl-4 pr-3 py-3.5 text-[#4D4D4D] select-none border-r border-[#2F2F2F] bg-[#121212]">
        <div v-for="n in lineCount" :key="n" class="text-xs leading-6 text-right">{{ n }}</div>
      </div>

      <!-- Code -->
      <div class="w-full overflow-x-auto">
        <pre class="p-3.5 text-sm leading-6 font-['Menlo',_'Monaco',_'Courier_New',_monospace] whitespace-pre sm:whitespace-pre-wrap break-words"><code class="text-[#D4D4D4]">{{ code }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Copy, CheckCheck } from 'lucide-vue-next'

const props = defineProps({
  language: {
    type: String,
    default: 'javascript'
  },
  code: {
    type: String,
    required: true
  }
})

const copied = ref(false)

const lineCount = computed(() => {
  return props.code.split('\n').length
})

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>