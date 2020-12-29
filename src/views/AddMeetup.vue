<template>
  <div class="view">
      <div class="flex items-center justify-center">
        <h1 class="view mb-4">Add Meetup</h1>
      </div>
      <MeetupForm @submitted-meetup-form="addMeetup" />
  </div>
</template>

<script>
import MeetupForm from '../components/MeetupForm'
export default {
    name: 'AddMeetup',
    
    props: [],

    components: { MeetupForm },

    data() {
        return {
          
        }
    },

    methods: {
      addMeetup(meetup) {
        this.$store.dispatch('add_meetup', meetup)
          .then( () => this.$router.push({name: 'MeetupList'}))
          .catch( error => console.log('error', error))
      }
    },

    computed: {},

    // Lifecycle vvv


}
</script>

<style>

</style>