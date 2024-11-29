<template>
  <span
    class="px-3 py-1 text-xs transition-all duration-300 border rounded-lg text-mywhite border-mygray/20 hover:border-mygray/50"
  >
    {{ name }}
  </span>
</template>

<script>
export default {
  name: "SkillBadge",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
