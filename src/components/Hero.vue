<template>
  <section 
    class="overflow-hidden relative bg-cover" 
    id="hero" 
    :style="{
      backgroundImage: 'url(\"/Header-background.webp\")',
      backgroundPosition: 'center 30%', 
      padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
    }"
  >
    <div class="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-olinto-gradient opacity-20 blur-3xl rounded-full"></div>
    
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
            class="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in text-foreground" 
            style="animation-delay: 0.3s"
          >
            Agentes de IA que<br class="hidden sm:inline" />
            <span class="text-mask-image bg-tech-gradient">transforman empresas</span>
          </h1>
          
          <p 
            style="animation-delay: 0.5s" 
            class="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-muted-foreground font-normal text-base sm:text-lg text-left"
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
          <div class="absolute inset-0 bg-dark-900 rounded-2xl sm:rounded-3xl -z-10 shadow-xl"></div>
          <div class="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
            <img 
              ref="imageRef" 
              src="/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png" 
              alt="Atlas Robot" 
              class="w-full h-auto object-cover transition-transform duration-500 ease-out" 
              style="transform-style: preserve-3d" 
            />
            <div class="absolute inset-0" style="background-image: url('/hero-image.jpg'); background-size: cover; background-position: center; mix-blend-mode: overlay; opacity: 0.5"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-olinto-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref<HTMLElement>()
const imageRef = ref<HTMLImageElement>()
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const handleMouseMove = (e: MouseEvent) => {
  if (!containerRef.value || !imageRef.value) return
  
  const {
    left,
    top,
    width,
    height
  } = containerRef.value.getBoundingClientRect()
  const x = (e.clientX - left) / width - 0.5
  const y = (e.clientY - top) / height - 0.5

  imageRef.value.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`
}

const handleMouseLeave = () => {
  if (!imageRef.value) return
  imageRef.value.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
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
  
  if (!isMobile.value && containerRef.value) {
    containerRef.value.addEventListener('mousemove', handleMouseMove)
    containerRef.value.addEventListener('mouseleave', handleMouseLeave)
  }
  
  if (!isMobile.value) {
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  
  if (containerRef.value) {
    containerRef.value.removeEventListener('mousemove', handleMouseMove)
    containerRef.value.removeEventListener('mouseleave', handleMouseLeave)
  }
  
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

.text-mask-image {
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

.bg-olinto-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.bg-tech-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}

.bg-olinto-100 {
  background-color: #f0f4ff;
}

.bg-dark-900 {
  background-color: #111827;
}
</style>
