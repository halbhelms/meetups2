import { createStore } from 'vuex'

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
