import { createRouter, createWebHistory } from 'vue-router'
import Meetups from '../views/Meetups.vue'
import AddMeetup from '../views/AddMeetup'
import EditMeetup from '../viewsEditMeetup'

const routes = [
  {
    path: '/',
    name: 'Meetups',
    component: Meetups
  },
  {
    path: '/add/',
    name: 'AddMeetup',
    component: AddMeetup
  },
  {
    path: '/edit/:id/',
    name: 'EditMeetup',
    component: EditMeetup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
