<template>
  <div>
    <HeaderNav @toggle-theme="onToggleTheme" @scroll-to="scrollToId" />
    <main>
      <HomeHero id="home" />
      <Products id="products" />
      <HowItWorks id="how-it-works" />
      <Technology id="technology" />
      <Pricing id="pricing" />
      <Clients id="clients" />
      <Faq id="faq" />
      <Contact id="contact" />
    </main>
    <FooterSection />
    <ChatWidget />
    <div class="fixed left-3 bottom-3 text-xs opacity-70 select-none"> {{ t('madeWithAI') }} </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import HeaderNav from '@/components/HeaderNav.vue'
import ChatWidget from '@/components/ChatWidget.vue'
import FooterSection from '@/sections/FooterSection.vue'
import HomeHero from '@/sections/HomeHero.vue'
import Products from '@/sections/Products.vue'
import HowItWorks from '@/sections/HowItWorks.vue'
import Technology from '@/sections/Technology.vue'
import Pricing from '@/sections/Pricing.vue'
import Clients from '@/sections/Clients.vue'
import Faq from '@/sections/Faq.vue'
import Contact from '@/sections/Contact.vue'

const { t } = useI18n()

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function onToggleTheme() {
  // handled in composable via event emitted by header
}
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_variables.scss" as v;

:deep(section) {
  scroll-margin-top: 80px;
}
</style>
