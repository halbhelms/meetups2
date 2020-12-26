import { createStore } from 'vuex'
// TODO import the API service
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
  },
  actions: {
  },
  modules: {
  }
})
