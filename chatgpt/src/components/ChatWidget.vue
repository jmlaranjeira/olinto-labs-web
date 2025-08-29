<template>
  <div class="fixed bottom-5 right-5 z-[var(--z-modal,60)]">
    <button class="btn-primary rounded-full p-4 shadow-neon" @click="open = !open" aria-haspopup="dialog" :aria-expanded="open">
      💬
    </button>
    <div v-if="open" role="dialog" aria-label="Chat widget" class="card mt-3 w-80 max-w-[90vw] p-4">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold">Olinto Assistant</h3>
        <button class="btn-ghost text-sm" @click="open=false">×</button>
      </div>
      <p class="text-sm opacity-80 mt-2">This is a placeholder widget. Plug your chat backend later.</p>
      <div class="mt-3 space-y-2 max-h-40 overflow-auto">
        <div class="text-sm opacity-70">🤖 Hi! How can I help?</div>
      </div>
      <form class="mt-3 flex gap-2" @submit.prevent>
        <input class="flex-1 rounded-xl px-3 py-2 bg-white/80 dark:bg-white/10 border border-white/20" placeholder="Type a message…" />
        <button class="btn-secondary text-sm">Send</button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
</script>
<style lang="scss" scoped>
</style>
