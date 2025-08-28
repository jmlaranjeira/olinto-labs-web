<template>
  <section class="py-16 bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Galería de Imágenes
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre nuestra tecnología en acción
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl overflow-hidden shadow-lg">
          <div class="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Interfaz de Usuario</h3>
            <p class="text-gray-600">Diseño moderno y intuitivo para una experiencia excepcional</p>
          </div>
        </div>
        
        <div class="bg-white rounded-xl overflow-hidden shadow-lg">
          <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Análisis en Tiempo Real</h3>
            <p class="text-gray-600">Monitoreo y análisis de datos en tiempo real</p>
          </div>
        </div>
        
        <div class="bg-white rounded-xl overflow-hidden shadow-lg">
          <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Automatización Inteligente</h3>
            <p class="text-gray-600">Procesos automatizados con inteligencia artificial</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// ImageShowcaseSection component
</script>
