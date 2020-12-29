<template>
<main class="w-screen">
  <BasicOutline />
  <div class="container mx-auto">
    <router-view/>
  </div>
</main>
</template>

<script>
import "tailwindcss/tailwind.css"
import BasicOutline from './components/BasicOutline'
export default {

  components: {
    BasicOutline
  },

  mounted() {
    this.$store.dispatch('retrieve_all_meetups')
  }
}
</script>

<style>
#app {
  font-family: Dosis, Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}

h1{
  font-family: 'Fredericka the Great', sans-serif;
  font-size: 2rem;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
