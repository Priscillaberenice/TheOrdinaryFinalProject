<template>
  <footer class="bg-lime-50 border-lime-50 border-t-2 flex flex-row justify-between fixed bottom-0 w-full">
    <div class="flex flex-col items-center ml-20 mt-5 mb-5">
      <router-link to="/">
        <p class="font-bold">Back to home✨</p>
      </router-link>
    </div>

    <div class="flex flex-col items-center mt-5">
      <router-link to="/AboutUs" class="font-bold">Find out who we are🌿</router-link>
    </div>

    <div class="flex flex-col items-center mt-5">
      <router-link to="/CONTACT" class="font-bold">Talk to a skin coach👩‍⚕️</router-link>
    </div>

    <div class="flex flex-col items-center mr-20 mt-5">
      <a href="https://www.instagram.com/theordinary/?hl=es" target="_blank">
        <p class="font-bold">Follow us <i class="fab fa-instagram"></i></p>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>