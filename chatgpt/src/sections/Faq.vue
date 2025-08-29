<template>
  <section id="faq" class="section container-xl">
    <h2 class="text-2xl md:text-4xl font-bold mb-8">{{ t('faq.title') }}</h2>
    <Accordion :items="items" />
  </section>
</template>
<script setup lang="ts">
import Accordion from '@/components/Accordion.vue'
const items = [
  { q: '¿Cómo integro Mercabot en WhatsApp?', a: 'Usamos WhatsApp Cloud API. Te guiamos con plantillas, verificación y webhooks.' },
  { q: '¿Necesito código para AgendaBot?', a: 'No. Ofrecemos integración low-code con tus calendarios existentes.' },
  { q: '¿Soportáis Telegram?', a: 'Sí, Telegram y WhatsApp son canales nativos.' },
  { q: '¿Qué pasa con la privacidad?', a: 'Privacidad por diseño. DPA, seguridad y aislamiento de datos por cliente.' },
  { q: '¿Puedo traer mi propio LLM?', a: 'Sí, la arquitectura admite OpenAI y modelos alternativos.' },
  { q: '¿Hay soporte en español e inglés?', a: 'Sí, soporte bilingüe y panel multi-idioma.' },
  { q: '¿Cómo se miden resultados?', a: 'Dashboards de conversión, retención y tiempo de respuesta.' },
  { q: '¿Puedo cancelar cuando quiera?', a: 'Claro, mes a mes.' },
]
</script>
<style lang="scss" scoped></style>
