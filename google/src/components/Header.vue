<script setup>
import { ref } from 'vue';

const emit = defineEmits(['toggleDarkMode', 'scrollToSection']);
const props = defineProps({
  isDarkMode: Boolean
});

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'Products', href: 'products' },
  { name: 'How it works', href: 'how-it-works' },
  { name: 'Technology', href: 'technology' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Clients', href: 'clients' },
  { name: 'FAQ', href: 'faq' },
  { name: 'Contact', href: 'contact' },
];

const handleScroll = (id) => {
  emit('scrollToSection', id);
};
</script>

<template>
  <header class="sticky top-0 bg-olinto-dark-bg/90 backdrop-blur-sm z-nav py-4 shadow-lg">
    <nav class="container mx-auto flex justify-between items-center px-4">
      <a href="#home" class="text-2xl font-bold text-olinto-primary" @click.prevent="handleScroll('home')">Olinto Labs</a>
      
      <ul class="hidden md:flex space-x-6">
        <li v-for="link in navLinks" :key="link.name">
          <a :href="`#${link.href}`" class="text-olinto-neutral-100 hover:text-olinto-primary transition-colors" @click.prevent="handleScroll(link.href)">
            {{ link.name }}
          </a>
        </li>
      </ul>

      <div class="flex items-center space-x-4">
        <label class="flex items-center cursor-pointer">
          <span class="sr-only">Toggle Dark Mode</span>
          <div class="relative">
            <input type="checkbox" :checked="isDarkMode" @change="emit('toggleDarkMode')" class="sr-only" />
            <div class="block bg-olinto-neutral-700 w-14 h-8 rounded-full"></div>
            <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform" :class="{ 'translate-x-full bg-olinto-primary': !isDarkMode }"></div>
          </div>
          <span class="ml-3 text-olinto-neutral-100 text-sm">{{ isDarkMode ? 'Dark' : 'Light' }}</span>
        </label>
        
        <!-- Mobile menu toggle (ejemplo) -->
        <button class="md:hidden text-olinto-neutral-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_variables.scss';

header {
  .dot {
    // Puedes aplicar variables SCSS aquí
    transition: transform 0.3s ease;
  }
}

// Ejemplo de uso de @apply en SCSS para componentes
.btn-primary {
  @apply bg-olinto-primary text-olinto-dark-bg px-6 py-3 rounded-lg font-bold hover:bg-olinto-secondary transition-colors duration-300;
}
</style>
