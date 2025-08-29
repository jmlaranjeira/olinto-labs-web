<template>
  <section id="how-it-works" class="py-16 text-center">
    <h2 class="text-4xl font-bold mb-12 text-olinto-primary">How We Build Your Bot</h2>
    <div class="relative max-w-5xl mx-auto">
      <!-- Timeline visual -->
      <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-olinto-primary border-dashed"></div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-center">
        <!-- Paso 1 -->
        <div class="relative md:text-right">
          <div class="md:absolute md:right-full md:mr-8 mb-4 md:mb-0">
            <div class="flex items-center justify-center md:justify-end">
              <span class="text-5xl text-olinto-secondary mr-4">1</span>
              <h3 class="text-3xl font-semibold text-olinto-neutral-100">Discover</h3>
            </div>
          </div>
          <p class="text-olinto-neutral-300 mt-2">Entendemos tus necesidades y objetivos para diseñar la solución ideal.</p>
          <div class="flex justify-center md:justify-end mt-4 space-x-2">
            <span class="badge">Research</span>
            <span class="badge">Strategy</span>
          </div>
        </div>
        <div></div> <!-- Espacio en el grid -->

        <!-- Paso 2 -->
        <div></div> <!-- Espacio en el grid -->
        <div class="relative md:text-left">
          <div class="md:absolute md:left-full md:ml-8 mb-4 md:mb-0">
            <div class="flex items-center justify-center md:justify-start">
              <span class="text-5xl text-olinto-secondary mr-4">2</span>
              <h3 class="text-3xl font-semibold text-olinto-neutral-100">Configure</h3>
            </div>
          </div>
          <p class="text-olinto-neutral-300 mt-2">Configuramos los parámetros del bot, flujos de conversación y reglas.</p>
          <div class="flex justify-center md:justify-start mt-4 space-x-2">
            <span class="badge">Embeddings</span>
            <span class="badge">Prompts</span>
          </div>
        </div>

        <!-- Paso 3 -->
        <div class="relative md:text-right">
          <div class="md:absolute md:right-full md:mr-8 mb-4 md:mb-0">
            <div class="flex items-center justify-center md:justify-end">
              <span class="text-5xl text-olinto-secondary mr-4">3</span>
              <h3 class="text-3xl font-semibold text-olinto-neutral-100">Integrate</h3>
            </div>
          </div>
          <p class="text-olinto-neutral-300 mt-2">Conectamos el bot con tus sistemas existentes vía API y webhooks.</p>
          <div class="flex justify-center md:justify-end mt-4 space-x-2">
            <span class="badge">API</span>
            <span class="badge">Webhooks</span>
          </div>
        </div>
        <div></div>

        <!-- Paso 4 -->
        <div></div>
        <div class="relative md:text-left">
          <div class="md:absolute md:left-full md:ml-8 mb-4 md:mb-0">
            <div class="flex items-center justify-center md:justify-start">
              <span class="text-5xl text-olinto-secondary mr-4">4</span>
              <h3 class="text-3xl font-semibold text-olinto-neutral-100">Measure</h3>
            </div>
          </div>
          <p class="text-olinto-neutral-300 mt-2">Monitoreamos el rendimiento y optimizamos continuamente.</p>
          <div class="flex justify-center md:justify-start mt-4 space-x-2">
            <span class="badge">Analytics</span>
            <span class="badge">Feedback</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.badge {
  @apply bg-olinto-neutral-700 text-olinto-neutral-100 text-xs px-3 py-1 rounded-full;
}
</style>
