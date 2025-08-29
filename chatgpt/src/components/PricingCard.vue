<template>
  <article :class="['card p-6 flex flex-col', highlight ? 'ring-1 ring-[color:var(--brand-primary)] shadow-neon' : '']" aria-label="Pricing plan">
    <h3 class="text-xl font-semibold">{{ title }}</h3>
    <div class="mt-1 text-3xl font-bold">{{ price }}</div>
    <ul class="mt-4 space-y-2 text-sm opacity-90">
      <li v-for="(f,i) in features" :key="i">✅ {{ f }}</li>
    </ul>
    <div class="mt-6">
      <button class="btn-primary w-full">{{ t('pricing.startTrial') }}</button>
    </div>
  </article>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
defineProps<{ title: string; price: string; features: string[]; highlight?: boolean }>()  
const { t } = useI18n()
</script>
<style lang="scss" scoped>
@use "@/assets/styles/_variables.scss" as v;
</style>
