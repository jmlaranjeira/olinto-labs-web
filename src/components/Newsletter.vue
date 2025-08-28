<template>
  <section class="py-16 bg-primary-600">
    <div class="container-custom">
      <div class="text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Mantente Actualizado
        </h2>
        <p class="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
          Suscríbete a nuestro newsletter para recibir las últimas novedades sobre IA y tecnología
        </p>
        
        <form class="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Tu email" 
            class="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
          <button 
            type="submit" 
            class="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Newsletter component
</script>
