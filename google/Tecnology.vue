<script setup>
const stackBadges = [
  'Vue 3', 'Vite', 'TailwindCSS', 'Node/TS', 'LangGraph', 'LangChain', 'OpenAI API',
  'Datadog', 'Jira', 'Supabase', 'Telegram Cloud', 'WhatsApp Cloud'
];
</script>

<template>
  <section id="technology" class="py-16 text-center">
    <h2 class="text-4xl font-bold mb-12 text-olinto-primary">Our Tech Stack</h2>
    <div class="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto">
      <span v-for="tech in stackBadges" :key="tech" class="tech-badge">
        {{ tech }}
      </span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <div class="tech-feature-card">
        <h3 class="text-xl font-semibold mb-2 text-olinto-primary">Seguridad</h3>
        <p class="text-olinto-neutral-300">Implementamos cifrado de extremo a extremo y auditorías constantes para proteger tus datos.</p>
      </div>
      <div class="tech-feature-card">
        <h3 class="text-xl font-semibold mb-2 text-olinto-primary">Privacidad</h3>
        <p class="text-olinto-neutral-300">Tus datos son tuyos. Cumplimos con las normativas más estrictas de privacidad.</p>
      </div>
      <div class="tech-feature-card">
        <h3 class="text-xl font-semibold mb-2 text-olinto-primary">Performance</h3>
        <p class="text-olinto-neutral-300">Bots ultra-rápidos y escalables, diseñados para manejar miles de interacciones por segundo.</p>
      </div>
      <div class="tech-feature-card">
        <h3 class="text-xl font-semibold mb-2 text-olinto-primary">Aislado de estilos</h3>
        <p class="text-olinto-neutral-300">Nuestras integraciones se ajustan perfectamente a tu marca sin conflictos de estilo.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tech-badge {
  @apply bg-olinto-primary text-olinto-dark-bg px-4 py-2 rounded-full font-medium shadow-md transition-transform hover:scale-105;
}

.tech-feature-card {
  @apply bg-olinto-neutral-900 p-6 rounded-lg shadow-xl border border-olinto-neutral-700 hover:border-olinto-secondary transition-all duration-300;
}
</style>
