<template>
    <h1 class="view font-sans">Meetups</h1>
    <MeetupCard v-for="meetup in $store.state.meetups" :meetup="meetup" :key="meetup.id" />
</template>

<script>
import MeetupCard from '../components/MeetupCard'

export default {
    name: 'MeetupList',
    
    props: [],

    components: { MeetupCard },

    data() {
        return {}
    },

    methods: {},

    computed: {},

    // Lifecycle vvv

    

}
</script>

<style>

</style>