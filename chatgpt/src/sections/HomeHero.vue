<template>
  <section id="home" class="section relative overflow-hidden">
    <!-- Parallax gradient orbs -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div class="absolute -top-20 -right-32 h-80 w-80 rounded-full blur-3xl opacity-40 bg-[color:var(--brand-primary)] animate-float-slow"></div>
      <div class="absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-30 bg-[color:var(--brand-secondary)] animate-float-slow"></div>
    </div>
    <div class="container-xl grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          {{ t('hero.title') }}
        </h1>
        <p class="mt-4 text-lg opacity-90 max-w-prose">
          {{ t('hero.subtitle') }}
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="#contact" @click.prevent="scroll('contact')" class="btn-primary"> {{ t('hero.ctaPrimary') }} </a>
          <a href="#products" @click.prevent="scroll('products')" class="btn-ghost"> {{ t('hero.ctaSecondary') }} </a>
        </div>
        <div class="mt-6 flex flex-wrap gap-2 opacity-80">
          <span class="badge">API</span>
          <span class="badge">Webhooks</span>
          <span class="badge">Embeddings</span>
          <span class="badge">Analytics</span>
        </div>
      </div>
      <div class="relative">
        <img
          class="w-full aspect-[4/3] object-cover rounded-2xl border border-white/10 shadow-neon will-change-transform"
          :style="{ transform: `translateY(${offset}px)` }"
          src="https://picsum.photos/seed/olinto-bot/1200/900"
          alt="Bot working in a futuristic lab"
          loading="lazy"
        />
        <span class="absolute bottom-3 right-3 text-xs opacity-60">Replace with your image</span>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const offset = ref(0)
function onScroll() { offset.value = Math.max(-10, Math.min(10, window.scrollY * 0.02)) }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
function scroll(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
<style lang="scss" scoped>
@use "@/assets/styles/_variables.scss" as v;
</style>
