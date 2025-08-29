<script setup>
import Card from '../components/Card.vue'; // Asumiendo un componente Card genérico

const products = [
  {
    name: 'Mercabot',
    description: 'Ventas omnicanal para e-commerce',
    features: ['WhatsApp/Telegram integrado', 'Catálogo de productos', 'Cobros automatizados'],
    icon: '🛒', // Placeholder de icono
  },
  {
    name: 'AgendaBot',
    description: 'Reservas y citas inteligentes',
    features: ['Gestión de disponibilidad', 'Recordatorios automáticos', 'Integración con calendarios'],
    icon: '📅',
  },
  {
    name: 'GymBot',
    description: 'Captación, fidelización y recordatorios para gimnasios',
    features: ['Automatización de inscripciones', 'Programas de entrenamiento', 'Notificaciones personalizadas'],
    icon: '💪',
  },
];
</script>

<template>
  <section id="products" class="py-16 text-center">
    <h2 class="text-4xl font-bold mb-12 text-olinto-primary">Our Bots</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card v-for="product in products" :key="product.name">
        <template #icon>{{ product.icon }}</template>
        <template #title>{{ product.name }}</template>
        <template #description>{{ product.description }}</template>
        <template #features>
          <ul class="text-left list-disc list-inside space-y-2">
            <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
          </ul>
        </template>
        <template #cta>
          <button class="btn-secondary">Learn more</button>
        </template>
      </Card>
    </div>
  </section>
</template>
