<template>
  <div class="view">
      <h2>Add a Meetup</h2>
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