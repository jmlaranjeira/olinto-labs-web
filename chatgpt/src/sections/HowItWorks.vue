<template>
  <section id="how-it-works" class="section container-xl">
    <h2 class="text-2xl md:text-4xl font-bold mb-8">{{ t('how.title') }}</h2>
    <ol class="relative border-s border-white/10 pl-6">
      <li v-for="(s, i) in steps" :key="i" class="mb-8">
        <span class="absolute -left-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-slate-900 text-xs font-bold">{{ i+1 }}</span>
        <div class="card p-5">
          <h3 class="font-semibold">{{ s }}</h3>
          <div class="mt-2 flex flex-wrap gap-2">
            <span class="badge">API</span><span class="badge">Webhooks</span><span class="badge">Embeddings</span><span class="badge">Analytics</span>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const steps = t('how.steps') as unknown as string[]
</script>
<style lang="scss" scoped></style>
