import axios from "axios";


export default {

  //USER
  JWT: false,
  setJWT: function(token){
    this.JWT = token;
  },
   getJWT: function(){
     return this.JWT;
   },
   isLoggedIn: function(){
     return this.JWT !== false;
   },
   logout: function(){
     this.JWT = false;
   },
   hello: function(){
     return axios.get("/dashboard", {headers:{Authorization: `Bearer ${this.JWT}`}});
   },
  // Gets user from id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Login user
  loginUser: function(email, password){
   return axios.post("/api/users/login", {email, password}).then((response) => {
if(response.data.token){
  this.setJWT(response.data.token);
}
return Promise.resolve(response);
   });
  },
  // Add new user to the database
  saveUser: function(newUser) {
    return axios.post("/api/users", newUser);
  },
   // Gets user from id and with task id
   updateTask: function(id, taskId) {
    return axios.put("/api/users/" + id, taskId);
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
  },



  //TASKS
  getTasks: function() {
    return axios.get("/api/tasks");
  },
  // Gets the task with the given id
  getTask: function(id) {
    return axios.get("/api/tasks/" + id);
  }


};