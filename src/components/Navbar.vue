<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300',
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    ]"
  >
    <div class="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <a 
        href="#" 
        class="flex items-center space-x-2"
        @click.prevent="scrollToTop"
        aria-label="Olinto Labs"
      >
        <img 
          src="/olinto-logo.svg" 
          alt="Olinto Labs" 
          class="h-7 sm:h-8 text-foreground" 
        />
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <a 
          href="#" 
          class="nav-link"
          @click.prevent="scrollToTop"
        >
          Home
        </a>
        <a href="#productos" class="nav-link">Productos</a>
        <a href="#features" class="nav-link">Características</a>
        <a href="#details" class="nav-link">Contacto</a>
      </nav>

      <!-- Mobile menu button - increased touch target -->
      <button 
        class="md:hidden text-gray-700 p-3 focus:outline-none" 
        @click="toggleMenu"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
      >
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation - improved for better touch experience -->
    <div 
      :class="[
        'fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out',
        isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      ]"
    >
      <nav class="flex flex-col space-y-8 items-center mt-8">
        <a 
          href="#" 
          class="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
          @click.prevent="handleMobileNavClick(() => scrollToTop())"
        >
          Home
        </a>
        <a 
          href="#productos" 
          class="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
          @click="handleMobileNavClick()"
        >
          Productos
        </a>
        <a 
          href="#features" 
          class="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
          @click="handleMobileNavClick()"
        >
          Características
        </a>
        <a 
          href="#details" 
          class="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
          @click="handleMobileNavClick()"
        >
          Contacto
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Prevent background scrolling when menu is open
  document.body.style.overflow = !isMenuOpen.value ? 'hidden' : ''
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  
  // Close mobile menu if open
  if (isMenuOpen.value) {
    isMenuOpen.value = false
    document.body.style.overflow = ''
  }
}

const handleMobileNavClick = (callback?: () => void) => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
  if (callback) callback()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200;
}

.nav-link:hover::after {
  @apply w-full;
}
</style>
