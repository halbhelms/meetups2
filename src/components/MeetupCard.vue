<template>
  <div class="card">
      <div>
        <h2 class="card-title"><span>Title</span><span><router-link to="{name: 'EditMeetup'}">Edit</router-link></span><span @click="deleteMeetup">Delete</span></h2>
        <p>Created by: A user</p>
      </div>

      <div>
          <div>Description:</div><div>A description</div>
          <div>Date:</div><div>A date</div>
          <div>Location:</div><div>A location</div>
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