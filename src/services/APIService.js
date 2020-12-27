import axios from 'axios'
const BASE_URL = "http://localhost:3002/"

export default {
    addMeetup: function(meetup) {
        return axios.post(BASE_URL + 'meetups/', meetup)
    },

    updateMeetup: function(meetup) {
        return axios.patch(BASE_URL + `meetups/${meetup.id}/`, meetup)
    },

    deleteMeetup: function(meetupId) {
        return axios.delete(BASE_URL + `meetups/${meetupId}`)
    },

    allMeetups: function() {
        return axios.get(BASE_URL + 'meetups/')
    },

    meetupById: function(meetupId) {
        return axios.get(BASE_URL + `meetups/${meetupId}`)
    }
}