<template>
  <section id="contact" class="py-16 text-center">
    <h2 class="text-4xl font-bold mb-12 text-olinto-primary">Get in Touch</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
      <!-- Formulario de contacto -->
      <form class="bg-olinto-neutral-900 p-8 rounded-lg shadow-xl border border-olinto-neutral-700">
        <div class="mb-6">
          <label for="name" class="block text-olinto-neutral-100 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" class="form-input" placeholder="Your Name" required>
        </div>
        <div class="mb-6">
          <label for="email" class="block text-olinto-neutral-100 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" class="form-input" placeholder="your@email.com" required>
        </div>
        <div class="mb-6">
          <label for="company" class="block text-olinto-neutral-100 text-sm font-bold mb-2">Company (Optional)</label>
          <input type="text" id="company" class="form-input" placeholder="Your Company Name">
        </div>
        <div class="mb-6">
          <label for="message" class="block text-olinto-neutral-100 text-sm font-bold mb-2">Message</label>
          <textarea id="message" class="form-textarea" rows="5" placeholder="How can we help you?" required></textarea>
        </div>
        <button type="submit" class="btn-primary w-full">Send Message</button>
      </form>

      <!-- Datos de contacto rápidos -->
      <div class="bg-olinto-neutral-900 p-8 rounded-lg shadow-xl border border-olinto-neutral-700 flex flex-col justify-between">
        <div>
          <h3 class="text-2xl font-semibold mb-4 text-olinto-primary">Contact Details</h3>
          <p class="mb-4 text-olinto-neutral-300">Estamos aquí para responder a tus preguntas. Contáctanos por el medio que prefieras.</p>
          
          <div class="space-y-4 mb-8">
            <p class="flex items-center text-olinto-neutral-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-olinto-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sales@olintolabs.com
            </p>
            <p class="flex items-center text-olinto-neutral-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-olinto-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586L6 14m0 0L4 12m4-4H4a2 2 0 00-2 2v6a2 2 0 002 2h2m-2-4h8m-4 0v4m-4-8h.01M17 14h.01" />
              </svg>
              <a href="https://wa.me/XXXXXXXXXXX" target="_blank" class="hover:underline">Chat via WhatsApp</a> / <a href="https://t.me/XXXXXXXXXXX" target="_blank" class="hover:underline">Telegram</a>
            </p>
            <p class="flex items-center text-olinto-neutral
