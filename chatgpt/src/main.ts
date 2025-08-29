import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/styles/tailwind.scss'
import { messages } from './i18n'

// Minimal i18n setup
const i18n = createI18n({
  legacy: false,
  locale: navigator.language.startsWith('es') ? 'es' : 'en',
  fallbackLocale: 'en',
  messages
})

createApp(App).use(i18n).mount('#app')
