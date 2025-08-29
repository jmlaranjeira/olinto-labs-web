<template>
  <section id="products" class="section container-xl">
    <h2 class="text-2xl md:text-4xl font-bold mb-8">{{ t('products.title') }}</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard
        icon="🛒"
        :title="t('products.mercabot.title')"
        :bullets="[t('products.mercabot.b1'), t('products.mercabot.b2'), t('products.mercabot.b3')]"
      />
      <ProductCard
        icon="📅"
        :title="t('products.agendabot.title')"
        :bullets="[t('products.agendabot.b1'), t('products.agendabot.b2'), t('products.agendabot.b3')]"
      />
      <ProductCard
        icon="🏋️"
        :title="t('products.gymbot.title')"
        :bullets="[t('products.gymbot.b1'), t('products.gymbot.b2'), t('products.gymbot.b3')]"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProductCard from '@/components/ProductCard.vue'
const { t } = useI18n()
</script>
<style lang="scss" scoped></style>
