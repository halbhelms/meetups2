<template>
  <div class="card">
      <div>
        <h2 class="card-title"><span>{{ meetup.title }}</span><span><router-link :to="{name: 'EditMeetup', params: {id: meetup.id}}">Edit</router-link></span><span @click="deleteMeetup">Delete</span></h2>
        <p>Created by: {{ meetup.createdBy }}</p>
      </div>

      <div>
          <div>Description:</div><div>{{ meetup.description }}</div>
          <div>Date:</div><div>{{ meetup.date }}</div>
          <div>Location:</div><div>{{ meetup.location }}</div>
      </div>

  </div>
</template>

<script>
export default {
    name: 'MeetupCard',
    
    props: {
        meetup: {
            type: Object,
            required: true
        }
    },

    components: {},

    data() {
        return {}
    },

    methods: {
        deleteMeetup() {
            console.log('MeetupCard > deleteMeetup clicked')
        }
    },

    computed: {},

    // Lifecycle vvv


}
</script>

<style>

</style>