<template>
  <section id="contact" class="section container-xl">
    <h2 class="text-2xl md:text-4xl font-bold mb-8">{{ t('contact.title') }}</h2>
    <div class="grid md:grid-cols-2 gap-8">
      <form @submit.prevent="onSubmit" class="card p-6 space-y-4" novalidate>
        <div>
          <label class="block text-sm mb-1" for="name">Nombre</label>
          <input id="name" v-model="form.name" required class="w-full rounded-xl px-3 py-2 bg-white/80 dark:bg-white/10 border border-white/20" />
          <p v-if="errors.name" class="text-red-400 text-sm mt-1">{{ errors.name }}</p>
        </div>
        <div>
          <label class="block text-sm mb-1" for="email">Email</label>
          <input id="email" type="email" v-model="form.email" required class="w-full rounded-xl px-3 py-2 bg-white/80 dark:bg-white/10 border border-white/20" />
          <p v-if="errors.email" class="text-red-400 text-sm mt-1">{{ errors.email }}</p>
        </div>
        <div>
          <label class="block text-sm mb-1" for="company">Empresa</label>
          <input id="company" v-model="form.company" class="w-full rounded-xl px-3 py-2 bg-white/80 dark:bg-white/10 border border-white/20" />
        </div>
        <div>
          <label class="block text-sm mb-1" for="message">Mensaje</label>
          <textarea id="message" v-model="form.message" rows="4" required class="w-full rounded-xl px-3 py-2 bg-white/80 dark:bg-white/10 border border-white/20"></textarea>
          <p v-if="errors.message" class="text-red-400 text-sm mt-1">{{ errors.message }}</p>
        </div>
        <button class="btn-primary">{{ t('contact.submit') }}</button>
      </form>
      <aside class="space-y-4">
        <div class="card p-6">
          <h3 class="font-semibold">Datos rápidos</h3>
          <ul class="mt-2 text-sm opacity-90 space-y-1">
            <li>📧 sales@olintolabs.com</li>
            <li>💬 WhatsApp / Telegram</li>
            <li>📍 Badajoz, Spain</li>
          </ul>
        </div>
        <div class="card p-6">
          <h3 class="font-semibold">Legal</h3>
          <ul class="mt-2 text-sm opacity-80 space-y-1">
            <li><a href="#" class="underline">Terms</a> · <a href="#" class="underline">Privacy</a></li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const form = reactive({ name: '', email: '', company: '', message: '' })
const errors = reactive<{[k:string]: string | null}>({ name: null, email: null, message: null })

function validate() {
  errors.name = !form.name ? 'Este campo es obligatorio' : null
  errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? 'Email no válido' : null
  errors.message = !form.message ? 'Este campo es obligatorio' : null
  return !errors.name && !errors.email && !errors.message
}
function onSubmit() {
  if (!validate()) return
  // Replace with API call
  alert('Thanks! We will contact you soon.')
}
</script>
<style lang="scss" scoped></style>
