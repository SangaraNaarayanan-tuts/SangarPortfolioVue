<template>
  <v-app>
      <HomePage/>
  </v-app>
</template>

<script>
import HomePage from './pages/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage
},
}
</script>
<style >
body {
  font-family: 'poppins', sans-serif;
}
</style>
