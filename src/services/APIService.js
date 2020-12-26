import axios from 'axios'
const BASE_URL = "http://localhost:3002/"

export default {
    addMeetup: function(meetup) {

    },

    updateMeetup: function(meetup) {

    },

    deleteMeetup: function(meetupId) {

    },

    allMeetups: function() {
        return axios.get(BASE_URL + 'meetups/')
    },

    meetupById: function(meetupId) {
        
    }
}