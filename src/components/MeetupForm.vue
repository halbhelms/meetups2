<template>
    <form @submit.prevent="submitForm">
        <div class="form-element">
          <div class="label">Title</div>
          <div class="input">
            <input type="text" v-model="meetup.title" />
          </div>
        </div>
        
        <div class="form-element">
          <div class="label">Description</div>
          <div class="input">
            <input type="text" v-model="meetup.description">
          </div>
        </div>
       
        <div class="form-element">
          <div class="label">Who created this meetup?</div>
          <div class="input">
            <select v-model="meetup.createdBy">
              <option value="0">Please choose a user</option>
              <option v-for="user in $store.state.users" :value="user" :key="user">{{ user }}</option>
            </select>
          </div>
        </div>
       
        <div class="form-element">
          <div class="label">Location</div>
          <div class="input">
            <input type="text" v-model="meetup.location">
          </div>
        </div>
       
        <div class="form-element">
          <div class="label">Date</div>
          <div class="input">
            <input type="text" v-model="meetup.date">
          </div>
        </div>

        <div class="form-element">
          <div class="label">Category</div>
          <div class="input">
            <select v-model="meetup.category">
              <option value="0">Please choose a category</option>
              <option v-for="category in $store.state.categories" :value="category" :key="category">{{ category }}</option>
            </select>
          </div>

          <button>OK</button>
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