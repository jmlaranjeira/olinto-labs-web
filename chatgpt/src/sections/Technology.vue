<template>
  <section id="technology" class="section container-xl">
    <h2 class="text-2xl md:text-4xl font-bold mb-8">{{ t('tech.title') }}</h2>

    <div class="mb-6 flex flex-wrap gap-2">
      <span class="badge">Vue 3</span>
      <span class="badge">Vite</span>
      <span class="badge">Tailwind</span>
      <span class="badge">Node/TS</span>
      <span class="badge">LangGraph/LangChain</span>
      <span class="badge">OpenAI API</span>
      <span class="badge">Datadog</span>
      <span class="badge">Jira</span>
      <span class="badge">Supabase</span>
      <span class="badge">Telegram/WhatsApp Cloud</span>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <div class="card p-5">
        <h3 class="font-semibold">Engineering notes</h3>
        <ul class="mt-2 text-sm opacity-90 list-disc list-inside">
          <li v-for="p in pills" :key="p">{{ p }}</li>
        </ul>
      </div>
      <div class="card p-5">
        <h3 class="font-semibold">Style isolation</h3>
        <p class="text-sm opacity-90">Tailwind utilities + SCSS components with <code>&lt;style scoped&gt;</code> to avoid global leaks.</p>
        <p class="text-sm opacity-90 mt-2">Dark/light modes via <code>prefers-color-scheme</code> with manual toggle.</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const pills = t('tech.pills') as unknown as string[]
</script>
<style lang="scss" scoped></style>
