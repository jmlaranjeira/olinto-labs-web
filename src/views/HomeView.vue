<script setup lang="ts">
import { onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import ProductsSection from '@/components/ProductsSection.vue'
import HumanoidSection from '@/components/HumanoidSection.vue'
import SpecsSection from '@/components/SpecsSection.vue'
import DetailsSection from '@/components/DetailsSection.vue'
import ImageShowcaseSection from '@/components/ImageShowcaseSection.vue'
import Features from '@/components/Features.vue'
import Testimonials from '@/components/Testimonials.vue'
import Newsletter from '@/components/Newsletter.vue'
import MadeByHumans from '@/components/MadeByHumans.vue'
import Footer from '@/components/Footer.vue'

onMounted(() => {
  // Initialize intersection observer to detect when elements enter viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  
  const elements = document.querySelectorAll('.animate-on-scroll')
  elements.forEach((el) => observer.observe(el))
  
  // Setup smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const targetId = this.getAttribute('href')?.substring(1)
      if (!targetId) return
      
      const targetElement = document.getElementById(targetId)
      if (!targetElement) return
      
      // Increased offset to account for mobile nav
      const offset = window.innerWidth < 768 ? 100 : 80
      
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth'
      })
    })
  })
})
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main class="space-y-4 sm:space-y-8">
      <Hero />
      <ProductsSection />
      <HumanoidSection />
      <SpecsSection />
      <DetailsSection />
      <ImageShowcaseSection />
      <Features />
      <Testimonials />
      <Newsletter />
      <MadeByHumans />
    </main>
    <Footer />
  </div>
</template>
