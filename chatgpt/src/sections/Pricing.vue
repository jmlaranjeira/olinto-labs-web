<template>
  <section id="pricing" class="section container-xl">
    <h2 class="text-2xl md:text-4xl font-bold mb-8">{{ t('pricing.title') }}</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <PricingCard :title="t('pricing.starter')" price="€49/mo" :features="['Up to 1 bot','1 channel','Community support']" />
      <PricingCard :title="t('pricing.pro')" price="€199/mo" :features="['Up to 3 bots','3 channels','Email support','Basic analytics']" highlight />
      <PricingCard :title="t('pricing.scale')" price="Custom" :features="['Unlimited','Omnichannel','SLA','Advanced analytics']" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PricingCard from '@/components/PricingCard.vue'
const { t } = useI18n()
</script>
<style lang="scss" scoped></style>
