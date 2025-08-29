<template>
  <blockquote class="card p-6 flex gap-4 items-center">
    <img class="h-12 w-12 rounded-full object-cover" src="https://picsum.photos/seed/person/96/96" alt="Person" loading="lazy" />
    <div>
      <p class="italic opacity-90">“{{ quote }}”</p>
      <footer class="text-sm opacity-70 mt-1">— {{ author }}</footer>
    </div>
  </blockquote>
</template>
<script setup lang="ts">
defineProps<{ quote: string; author: string }>()
</script>
<style lang="scss" scoped></style>
