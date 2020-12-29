<template>
    <div class="flex items-center justify-center">
        <h1 class="view">Meetups</h1>
    </div>
    <div class="grid items-center justify-center">
        <MeetupCard class="pb-2 my-4 border-b-2 border-blue-100" v-for="meetup in $store.state.meetups" :meetup="meetup" :key="meetup.id" />
    </div>
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

    beforeUpdate() {
        this.$store.dispatch('retrieve_all_meetups')
    }    

}
</script>

<style>

</style>