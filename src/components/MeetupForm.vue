<template>
    <form @submit.prevent="submitForm" class="">
        <!-- title -->
        <div class="grid mb-3 ">
            <div class="grid grid-cols-12">
                <label class="col-span-3 text-right pr-3 font-bold font-bold">
                    Title  
                </label>
                <input class="col-span-8 col-start-4  border-2 border-gray-200 rounded-md pl-2 focus:border-purple-500 focus:bg-purple-100" type="text" v-model="meetup.title" />
            </div>
        </div>
        <!-- description -->
        <div class="grid mb-3">
            <div class="grid grid-cols-12">
                <label class="col-span-3 text-right pr-3 font-bold font-bold">
                    Description  
                </label>
                    <textarea class="col-span-8 col-start-4  border-2 border-gray-200 rounded-md pl-2 focus:border-purple-500 focus:bg-purple-100" type="text" v-model="meetup.description"></textarea>
            </div>
        </div>
        <!-- createdBy -->
        <div class="grid mb-3">
            <div class="grid grid-cols-12 ">
                <label class=" col-span-3 text-right pr-3 font-bold font-bold">
                    Who created this meetup?  
                </label>
                <select class="col-span-4 col-start-4 border-2 border-gray-200 rounded-md pl-2 focus:border-purple-500 focus:bg-purple-100" v-model="meetup.createdBy">
                    <option value="0">Please choose a user</option>
                    <option v-for="user in $store.state.users" :value="user" :key="user">{{ user }}</option>
                </select>
            </div>
        </div>
        <!-- location -->
        <div class="grid mb-3 ">
            <div class="grid grid-cols-12">
                <label class="col-span-3 text-right pr-3 font-bold font-bold">
                    Location  
                </label>
                <input class="col-span-8 col-start-4  border-2 border-gray-200 rounded-md pl-2 focus:border-purple-500 focus:bg-purple-100" type="text" v-model="meetup.location" />
            </div>
        </div>
        <!-- date -->
        <div class="grid mb-3 ">
            <div class="grid grid-cols-12">
                <label class="col-span-3 text-right pr-3 font-bold font-bold">
                    Date  
                </label>
                <input class="col-span-8 col-start-4  border-2 border-gray-200 rounded-md pl-2 focus:border-purple-500 focus:bg-purple-100" type="text" v-model="meetup.date" />
            </div>
        </div>
        <!-- category -->
        <div class="grid">
            <div class="grid grid-cols-12 ">
                <label class=" col-span-3 text-right pr-3 font-bold font-bold">
                    Category  
                </label>
                <select class="col-span-4 col-start-4 border-2 border-gray-200 rounded-md pl-2 focus:border-purple-500 focus:bg-purple-100" v-model="meetup.category">
                    <option value="0">Please choose a category</option>
                    <option v-for="category in $store.state.categories" :value="category" :key="category">{{ category }}</option>
                </select>
            </div>
        </div>       
        <!-- button -->
        <div class="grid mt-4 justify-center">
            <button class="bg-purple-100 w-20 border-2 rounded-md border-purple-500 hover:bg-purple-500 hover:text-white">OK</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'MeetupForm',
    
    props: {
      _meetup: {
        type: Object,
        required: false
      }
    },

    components: {},

    data() {
        return {
            meetup: {
              title: null,
              description: null,
              createdBy: null,
              location: null,
              date: null,
              category: null
            }
        }
    },

    methods: {
        submitForm() {
            this.$emit('submitted-meetup-form', this.meetup)
        }
    },

    computed: {},

    // Lifecycle vvv
    beforeUpdate() {
      if (this._meetup) {
        this.meetup = this._meetup
      }
    }

}
</script>

<style>

</style>