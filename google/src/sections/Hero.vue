<script setup>
import Button from '../components/Button.vue'; // Si decides crear un componente Button genérico

const emit = defineEmits(['scrollToSection']);
</script>

<template>
  <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Placeholder de imagen del bot, con sutiles efectos neón -->
    <div class="absolute inset-0 z-0 bg-cover bg-center" style="background-image: url('/src/assets/images/bot-lab-placeholder.jpg');">
      <div class="absolute inset-0 bg-gradient-to-t from-olinto-dark-bg to-transparent opacity-80"></div>
      <div class="absolute inset-0 bg-olinto-dark-bg opacity-30"></div>
      <!-- Efectos neón -->
      <div class="absolute inset-0 bg-olinto-primary opacity-10 blur-xl animate-pulse-slow"></div>
      <div class="absolute inset-0 bg-olinto-secondary opacity-10 blur-xl animate-pulse-slow delay-500"></div>
    </div>

    <div class="relative z-10 text-center text-olinto-neutral-100 max-w-4xl px-4">
      <h1 class="text-6xl font-extrabold mb-4 animate-fade-in-up">Olinto Labs</h1>
      <p class="text-3xl mb-8 animate-fade-in-up delay-200">We build specialized AI bots that actually ship and sell.</p>
      <div class="flex justify-center space-x-6 animate-fade-in-up delay-400">
        <a href="#" class="btn-primary" @click.prevent="emit('scrollToSection', 'contact')">Get a demo</a>
        <a href="#" class="btn-secondary" @click.prevent="emit('scrollToSection', 'products')">Explore products</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_variables.scss';

section {
  @apply flex flex-col items-center justify-center min-h-[calc(100vh-theme('spacing.20'))]; // Ajusta según la altura del header
  text-shadow: 0 0 10px rgba($color-primary, 0.5), 0 0 20px rgba($color-secondary, 0.5);
}

// Ejemplo de uso de @apply para variantes
.btn-primary {
  @apply bg-olinto-primary text-olinto-dark-bg px-8 py-4 rounded-full font-bold text-lg hover:bg-olinto-secondary transition-colors duration-300 transform hover:scale-105;
}

.btn-secondary {
  @apply bg-transparent border-2 border-olinto-primary text-olinto-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-olinto-primary hover:text-olinto-dark-bg transition-colors duration-300 transform hover:scale-105;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.05); }
}

.animate-pulse-slow {
  animation: pulse-slow 5s infinite ease-in-out;
}
</style>
