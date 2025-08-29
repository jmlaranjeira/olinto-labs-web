<template>
  <div class="w-full" role="region">
    <div v-for="(item, idx) in items" :key="idx" class="border-b border-white/10">
      <button class="w-full text-left py-4 flex items-center justify-between focus-visible:outline-none"
              :aria-expanded="openIndex === idx" :aria-controls="'panel-'+idx" @click="toggle(idx)">
        <span class="font-medium">{{ item.q }}</span>
        <span class="opacity-70">{{ openIndex === idx ? '−' : '+' }}</span>
      </button>
      <div v-show="openIndex === idx" :id="'panel-'+idx" role="region" class="pb-4 text-sm opacity-90">
        <slot name="a" :a="item.a">{{ item.a }}</slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
export interface QA { q: string; a: string }
defineProps<{ items: QA[] }>()
const openIndex = ref<number | null>(0)
function toggle(i: number) { openIndex.value = openIndex.value === i ? null : i }
</script>
<style lang="scss" scoped>
</style>
