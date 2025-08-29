<template>
  <section id="clients" class="section container-xl">
    <h2 class="text-2xl md:text-4xl font-bold mb-8">{{ t('clients.title') }}</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
      <ClientLogo v-for="i in 8" :key="i" />
    </div>
    <div class="mt-10 grid md:grid-cols-2 gap-6">
      <TestimonialCard :quote="t('clients.t1')" author="E‑commerce Lead" />
      <TestimonialCard :quote="t('clients.t2')" author="Clinic Manager" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ClientLogo from '@/components/ClientLogo.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
const { t } = useI18n()
</script>
<style lang="scss" scoped></style>
