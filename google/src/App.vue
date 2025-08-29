<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import Hero from './sections/Hero.vue';
import Products from './sections/Products.vue';
import HowItWorks from './sections/HowItWorks.vue';
import Technology from './sections/Technology.vue';
import Pricing from './sections/Pricing.vue';
import Clients from './sections/Clients.vue';
import FAQ from './sections/FAQ.vue';
import Contact from './sections/Contact.vue';
import Footer from './components/Footer.vue';

const isDarkMode = ref(true); // Default a oscuro

onMounted(() => {
  // Detectar preferencia del sistema
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    isDarkMode.value = false;
  }
  document.body.classList.toggle('dark', isDarkMode.value);
  document.body.classList.toggle('light', !isDarkMode.value);
});

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle('dark', isDarkMode.value);
  document.body.classList.toggle('light', !isDarkMode.value);
};

// Función para scroll suave a anclas
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div :class="{ 'dark': isDarkMode, 'light': !isDarkMode }">
    <Header @toggle-dark-mode="toggleDarkMode" :isDarkMode="isDarkMode" @scroll-to-section="scrollToSection" />

    <main class="container mx-auto px-4 py-8">
      <Hero id="home" @scroll-to-section="scrollToSection" />
      <Products id="products" />
      <HowItWorks id="how-it-works" />
      <Technology id="technology" />
      <Pricing id="pricing" />
      <Clients id="clients" />
      <FAQ id="faq" />
      <Contact id="contact" />
    </main>

    <Footer />

    <!-- Widget de chat placeholder -->
    <div class="fixed bottom-4 right-4 bg-olinto-primary text-olinto-dark-bg rounded-full p-3 shadow-lg cursor-pointer z-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
// Estilos globales adicionales o overrides de Tailwind si es necesario
// Aunque la mayoría debería ir en base.scss o en componentes individuales.
</style>
