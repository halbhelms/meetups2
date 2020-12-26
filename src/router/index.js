import { createRouter, createWebHistory } from 'vue-router'
import MeetupList from '../views/MeetupList'
import AddMeetup from '../views/AddMeetup'
import EditMeetup from '../views/EditMeetup'

const routes = [
  {
    path: '/',
    name: 'MeetupList',
    component: MeetupList
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
