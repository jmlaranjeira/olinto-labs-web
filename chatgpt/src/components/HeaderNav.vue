<template>
  <header class="sticky top-0 z-[var(--z-nav,50)] bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/40 border-b border-white/10">
    <nav class="container-xl flex items-center justify-between py-3" aria-label="Primary">
      <a href="#home" @click.prevent="emitScroll('home')" class="flex items-center gap-2 font-bold tracking-tight">
        <span class="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary shadow-neon"></span>
        <span>Olinto Labs</span>
      </a>
      <div class="hidden md:flex items-center gap-6">
        <a v-for="item in nav" :key="item.id" :href="'#'+item.id" @click.prevent="emitScroll(item.id)"
           class="text-sm opacity-80 hover:opacity-100 focus-visible:opacity-100">{{ item.label }}</a>
      </div>
      <div class="flex items-center gap-2">
        <button class="btn-ghost text-xs" @click="toggleLocale">{{ currentLocale.toUpperCase() }}</button>
        <button class="btn-ghost" @click="onToggleTheme" aria-label="Toggle theme">
          <span v-if="isDark">🌙</span><span v-else>☀️</span>
        </button>
        <a href="#contact" @click.prevent="emitScroll('contact')" class="btn-primary text-sm">{{ t('hero.ctaPrimary') }}</a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { toggleTheme } from '@/composables/useTheme'

const emit = defineEmits<{ (e: 'scroll-to', id: string): void, (e:'toggle-theme'):void }>()

const { t, locale } = useI18n()
const currentLocale = computed(() => String(locale.value))

function toggleLocale() {
  locale.value = currentLocale.value === 'es' ? 'en' : 'es'
}

function emitScroll(id: string) {
  emit('scroll-to', id)
}

const isDark = ref(document.documentElement.classList.contains('dark'))
function onToggleTheme() {
  toggleTheme()
  isDark.value = document.documentElement.classList.contains('dark')
  emit('toggle-theme')
}

const nav = computed(() => [
  { id: 'home', label: t('nav.home') },
  { id: 'products', label: t('nav.products') },
  { id: 'how-it-works', label: t('nav.how') },
  { id: 'technology', label: t('nav.tech') },
  { id: 'pricing', label: t('nav.pricing') },
  { id: 'clients', label: t('nav.clients') },
  { id: 'faq', label: t('nav.faq') },
  { id: 'contact', label: t('nav.contact') },
])
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_variables.scss" as v;
nav a { @apply cursor-pointer; }
</style>
