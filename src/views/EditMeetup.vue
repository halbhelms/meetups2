<template>
  <div class="view">
      <h2>Edit a Meetup</h2>
      <MeetupForm :_meetup="meetup" @submitted-meetup-form="updateMeetup" />
  </div>
</template>

<script>
import MeetupForm from '../components/MeetupForm'

export default {
    name: 'EditMeetup',
    
    props: {},

    components: { MeetupForm },

    data() {
        return {
          meetup: null
        }
    },

    methods: {
      updateMeetup(meetup) {
        this.$store.dispatch('update_meetup', meetup)
          .then( () => this.$router.push({name: 'MeetupList'}))
          .catch( error => console.log('error', error))
      }
    },

    computed: {},

    // Lifecycle vvv

    mounted() {
        this.$store.dispatch('retrieve_meetup_by_id', this.$route.params.id)
            .then( response => {
                this.meetup = response}
            )
            .catch( error => console.log('error', error))
    }

}
</script>

<style>

</style>