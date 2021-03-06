import { createStore } from 'vuex'
import API from '../services/APIService'
import router from 'vue-router'

export default createStore({
  state: {
    meetups: [{
      "id": 1,
      "title": "M0106",
      "description": "A splendid affair, not to be missed",
      "createdBy": "Hosey Hoserson",
      "date": "12.26.2020",
      "location": "Bellagio Hotel & Casino",
      "category": "Saving Animals"
    }],
    categories: [
      'Helping the Homeless',
      'Preserving the Environment',
      'Feeding the Hungry',
      'Saving Animals'
    ],
    users: [
      'Hosey Hoserson',
      'Demo Sthenes',
      'Johnny B. Good',
      'Shallow Hal'
    ]
  },
  
  mutations: {
    POPULATE_MEETUPS(state, meetups) {
      state.meetups = meetups
    },

    ADD_MEETUP(state, meetup) {
      state.meetups.push(meetup)
    },

    UPDATE_MEETUP(state, meetup) {
      let foundIndex = state.meetups.findIndex( aMeetup => aMeetup.id == meetup.id)
      state.meetups[foundIndex] = meetup
    },

    DELETE_MEETUP(state, meetupId) {
      state.meetups = state.meetups.filter( meetup => {
        meetup.id !== meetupId
      })
    }
  },

  getters: {},
  
  actions: {
    retrieve_all_meetups({ commit }) {
      return API.allMeetups()
        .then(response => {
          commit('POPULATE_MEETUPS', response.data)
        })
        .catch( error => console.log('error', error))
    },

    retrieve_meetup_by_id({ state }, meetupId) {
      return state.meetups.find( aMeetup => aMeetup.id === parseInt(meetupId)) 
    },

    add_meetup({ commit }, meetup) {
      return API.addMeetup(meetup)
        .then( (response) => {
          commit('ADD_MEETUP', response.data)
        })
    },

    update_meetup({ commit }, meetup) {
      API.updateMeetup(meetup)
        .then( () => commit('UPDATE_MEETUP', meetup))
        .catch( error => console.log('error', error))
    },

    remove_meetup({ commit }, meetupId) {
      return API.deleteMeetup(meetupId)
        .then( () => commit('DELETE_MEETUP', meetupId))
        .catch( error => console.log('error', error))
    }
  },
  
  modules: {
  }
})
