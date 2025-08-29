<template>
  <article class="card p-6 hover:shadow-neon transition" role="article">
    <div class="text-3xl">{{ icon }}</div>
    <h3 class="mt-3 text-xl font-semibold">{{ title }}</h3>
    <ul class="mt-3 space-y-1 text-sm opacity-90 list-disc list-inside">
      <li v-for="(b,i) in bullets" :key="i">{{ b }}</li>
    </ul>
    <div class="mt-5">
      <a href="#" class="btn-secondary">{{ cta }}</a>
    </div>
  </article>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
defineProps<{ icon: string; title: string; bullets: string[] }>()
const { t } = useI18n()
const cta = t('products.learnMore')
</script>
<style lang="scss" scoped>
@use "@/assets/styles/_variables.scss" as v;
</style>
