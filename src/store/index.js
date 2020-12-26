import { createStore } from 'vuex'
import API from '../services/APIService'
// TODO add mutations
// TODO add actions
export default createStore({
  state: {
    meetups: [],
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
    }
  },
  actions: {
    getAllMeetups({ commit }) {
      API.allMeetups()
        .then(response => commit('POPULATE_MEETUPS', response.data))
        .catch( error => console.log('error', error))
    }
  },
  modules: {
  }
})
