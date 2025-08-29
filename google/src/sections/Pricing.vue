<script setup>
import PricingTable from '../components/PricingTable.vue'; // Asumiendo un componente PricingTable

const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    features: [
      '3.000 mensajes / mes',
      '1 Bot básico',
      'Soporte email',
      'Integración WhatsApp/Telegram'
    ],
    cta: 'Start trial'
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/month',
    features: [
      '15.000 mensajes / mes',
      '3 Bots avanzados',
      'Soporte prioritario',
      'Análisis de datos',
      'Integración CRM'
    ],
    highlight: true, // Para destacar un plan
    cta: 'Start trial'
  },
  {
    name: 'Scale',
    price: '$499',
    period: '/month',
    features: [
      'Mensajes ilimitados',
      'Bots personalizados',
      'Soporte 24/7',
      'API & Webhooks',
      'Consultoría estratégica'
    ],
    cta: 'Start trial'
  },
];
</script>

<template>
  <section id="pricing" class="py-16 text-center">
    <h2 class="text-4xl font-bold mb-12 text-olinto-primary">Pricing Plans</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <PricingTable v-for="plan in pricingPlans" :key="plan.name" :plan="plan" />
    </div>
  </section>
</template>
