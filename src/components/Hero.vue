<template>
  <section 
    class="overflow-hidden relative bg-gradient-to-br from-blue-50 to-indigo-100" 
    id="hero" 
    :style="{
      padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
    }"
  >
    <div class="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-gradient-to-br from-blue-400 to-purple-600 opacity-20 blur-3xl rounded-full"></div>
    
    <div class="container px-4 sm:px-6 lg:px-8" ref="containerRef">
      <div class="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
        <div class="w-full lg:w-1/2">
          <div 
            class="olinto-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" 
            style="animation-delay: 0.1s"
          >
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white mr-2">AI</span>
            <span>Inteligencia Artificial</span>
          </div>
          
          <h1 
            class="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in text-gray-900" 
            style="animation-delay: 0.3s"
          >
            Agentes de IA que<br class="hidden sm:inline" />
            <span class="text-gradient">transforman empresas</span>
          </h1>
          
          <p 
            style="animation-delay: 0.5s" 
            class="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-600 font-normal text-base sm:text-lg text-left"
          >
            En Olinto Labs desarrollamos agentes de IA especializados que automatizan procesos, 
            optimizan operaciones y potencian la productividad de tu negocio.
          </p>
          
          <div 
            class="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
            style="animation-delay: 0.7s"
          >
            <a 
              href="#productos" 
              class="button-demo flex items-center justify-center group w-full sm:w-auto text-center"
            >
              Solicita una demo
              <svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
            <button class="button-secondary w-full sm:w-auto">
              Ver productos
            </button>
          </div>
        </div>
        
        <div class="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div class="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-8">
            <div class="text-center">
              <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Tecnología de Vanguardia</h3>
              <p class="text-gray-600">
                Soluciones de IA avanzadas para transformar tu negocio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref<HTMLElement>()
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const handleScroll = () => {
  if (isMobile.value) return
  
  const scrollY = window.scrollY
  const elements = document.querySelectorAll('.parallax')
  elements.forEach(el => {
    const element = el as HTMLElement
    const speed = parseFloat(element.dataset.speed || '0.1')
    const yPos = -scrollY * speed
    element.style.setProperty('--parallax-y', `${yPos}px`)
  })
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  
  if (!isMobile.value) {
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.olinto-chip {
  @apply inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium;
}

.section-title {
  @apply font-bold tracking-tight;
}

.text-gradient {
  @apply bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent;
}

.button-demo {
  @apply bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200;
}

.button-secondary {
  @apply bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200;
}

.parallax {
  transform: translateY(var(--parallax-y, 0));
}
</style>
