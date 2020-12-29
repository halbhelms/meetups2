<template>
  <div class="card pb-4">
        <div>
            <div class="card-heading grid grid-cols-12">
                <h2 class="card-title text-2xl font-bold col-span-11 text-center">
                    {{ meetup.title }}
                </h2>
                <div class="grid grid-cols-2 col-span-1">
                    <div>
                        <router-link :to="{name: 'EditMeetup', params: {id: meetup.id}}">
                            <img class="mt-2" width="16" src="pencil.png" />
                        </router-link>
                    </div>
                    <div @click="deleteMeetup(meetup.id)">
                        <img class="mt-2" src="../assets/delete.png" width="16" />
                    </div>
                </div>
            </div>
            <p class="text-center my-2 text-gray-600">Created by: {{ meetup.createdBy }}</p>
        </div>
        <div class="grid">
            <!-- description -->
            <div class="grid grid-cols-12">
                <div class="col-span-3 text-right pr-3 font-bold font-bold">
                    Description:
                </div>
                <div class="col-span-9">
                    {{ meetup.description }}
                </div>
            </div>
            <!-- date -->
            <div class="grid grid-cols-12">
                <div class="col-span-3 text-right pr-3 font-bold">
                    Date:
                </div>
                <div class="col-span-9">
                    {{ meetup.date }}
                </div>
            </div>
            <!-- location -->
            <div class="grid grid-cols-12">
                <div class="col-span-3 text-right pr-3 font-bold">
                    Location:
                </div>
                <div class="col-span-9">
                    {{ meetup.location }}
                </div>
            </div>
            <!-- category -->
            <div class="grid grid-cols-12">
                <div class="col-span-3 text-right pr-3 font-bold">
                    Category:
                </div>
                <div class="col-span-9">
                    {{ meetup.category }}
                </div>
            </div>
            
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
        deleteMeetup(meetupId) {
            this.$store.dispatch('remove_meetup', meetupId)
        }
    },

    computed: {},

    // Lifecycle vvv


}
</script>

<style>

</style>