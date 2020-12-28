<template>
  <div id="nav" class="text-center h-10 align-baseline outline-black pt-4">
    <router-link :to="{name: 'MeetupList'}" class="text-sm px-2  border-2 border-transparent rounded-md mr-4 hover:bg-purple-400 hover:text-white hover:border-purple-800">All Meetups</router-link>
    |
    <router-link :to="{name: 'AddMeetup'}" class="text-sm ml-4 hover:bg-purple-400 hover:text-white hover:border-double hover:p-2">Add Meetup</router-link>
    
  </div>
  <BasicOutline />
  <router-view/>
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
