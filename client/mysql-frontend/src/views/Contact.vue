<template>
    <div>
      <div class="max-w-6xl mx-auto mb-3 bg-white shadow-md flex flex-row h-96 mt-8">
        <div class="w-1/2 p-8 bg-pink-500 flex items-center">
          <div>
            <h1 class="text-3xl font-bold mb-4 text-red-100">
              Doubts? Our team is here to help you with all the love! 💚
            </h1>
            <p class="text-xl font-sans text-amber-950">
              Whether you're looking for a new care routine or have
              questions about your order, or if you need help with
              something, <span class="font-bold">we're here for you!</span>
            </p>
          </div>
        </div>
        <div class="w-1/2 h-full">
          <img src="https://thenewknew.com/wp-content/uploads/2022/08/The-Ordinary-Lisa-in-background-holding-a-bottle-of-oil-scaled.jpg" alt="Contact Image" class="w-full h-full object-cover">
        </div>
      </div>
  
      <div class="max-w-xl mx-auto mb-20">
        <form @submit.prevent="submitContactForm" class="bg-white px-8 pt-6 pb-8">
          <div class="mb-4">
            <label for="name" class="block font-sans text-l mb-2">Name and Surname</label>
            <input type="text" id="name" v-model="contactForm.name" class="border rounded-full w-full py-2 px-3 text-black" required>
          </div>
          <div class="mb-4">
            <label for="email" class="block font-sans text-l mb-2">E-mail</label>
            <input type="email" id="email" v-model="contactForm.email" class="border rounded-full w-full py-2 px-3 text-black" required>
          </div>
          <div class="mb-6">
            <label for="message" class="block font-sans text-l mb-2">Message</label>
            <textarea id="message" v-model="contactForm.message" rows="4" class="border rounded-r-lg rounded-l-lg w-full py-2 px-3 text-black" required></textarea>
          </div>
          <div class="mb-4 flex items-center">
            <input type="checkbox" id="privacyPolicy" v-model="contactForm.privacyPolicy" class="mr-2">
            <label for="privacyPolicy" class="text-l font-sans">I have read and accept the Privacy and Data Protection Policy</label>
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" class="w-full rounded-lg bg-amber-950 text-white pt-1 pb-1 hover:bg-white hover:text-amber-950 hover:border-2 hover:border-amber-950 font-bold">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    data() {
      return {
        contactForm: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
  };
  </script>