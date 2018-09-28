import axios from "axios";


export default {
  //USER
  // Gets user from login id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Add new user to the database
  saveUser: function(newUser) {
    return axios.post("/api/users", newUser);
  },




  //RSVPS
  // Gets all rsvps for the logged in user
  getRSVPS: function(id) {
    return axios.get("/api/rsvps/" + id);
  },
  // Updates the RSVP with the given id to attend
  updateRSVPAttend: function(updatedRSVP) {
    let id = updatedRSVP._id;
    let updatedRSVPNew = {
         attending : true,
    };
    return axios.updateAttend("/api/rsvps/" + id, updatedRSVPNew);
  },
  // Updates the RSVP with the given id to not attend
  updateRSVPNotAttend: function(updatedRSVP) {
    let id = updatedRSVP._id;
    let updatedRSVPNew = {
        notAttending : true,
    };
    return axios.updateRSVPNotAttend("/api/rsvps/" + id, updatedRSVPNew);
  },
  // Saves an article to the database
  addRSVP: function(newRSVP) {
    return axios.post("/api/rsvps", newRSVP);
  },


  //VENDORS
  getVendors: function() {
    return axios.get("/api/vendors");
  },
  // Gets the book with the given id
  getVendor: function(id) {
    return axios.get("/api/vendors/" + id);
  }







};