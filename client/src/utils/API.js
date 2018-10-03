import axios from "axios";


export default {

  //USER
  JWT: false,
  setJWT: function (token) {
    this.JWT = token;
  },
  getJWT: function () {
    return this.JWT;
  },
  isLoggedIn: function () {
    return this.JWT !== false;
  },
  logout: function () {
    this.JWT = false;
  },

  // Gets user from id
  getUser: function() {
    return axios.get("/api/users/findById", {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },
  
  // Login user
  loginUser: function (email, password) {
    return axios.post("/api/users/login", { email, password }).then((response) => {
      if (response.data.token) {
        this.setJWT(response.data.token);
      }
      return Promise.resolve(response);
    });
  },
  //get info
  todo: function () {
    return axios.get("/api/to-do-list",
      {
        headers: {
          Authorization: `Bearer ${this.JWT}`
        }
      }
    )
  },
  // Add new user to the database
  saveUser: function (newUser) {
    return axios.post("/api/users", newUser);
  },
 




  //RSVPS
  // Gets all rsvps for the logged in user
  getRSVPS: function () {
    return axios.get("/api/rsvps/", {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },
  // Updates the RSVP with the given id to attend
  updateRSVPAttend: function (RSVPid) {
    return axios.put("/api/rsvps/attend", { RSVPid :RSVPid},{
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    } );
  },
  // Updates the RSVP with the given id to not attend
  updateRSVPNotAttend: function (RSVPid) {
    return axios.put("/api/rsvps/noattend", { RSVPid :RSVPid},{
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    } );
  },

  // Saves an article to the database

  addRSVP: function(name) {
    return axios.post("/api/rsvps/",{ name: name}, {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });

  },


  //VENDORS
  getVendors: function () {
    return axios.get("/api/vendors");
  },
  // Gets the book with the given id
  getVendor: function (id) {
    return axios.get("/api/vendors/" + id);
  },



  //TASKS
  getTasks: function () {
    return axios.get("/api/tasks", {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },
  // Gets the task with the given id
  getTask: function (id) {
    return axios.get("/api/tasks/" + id, {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },
   // Gets user from id and with task id
   updateTask: function (taskId) {
    return axios.put("/api/tasks/", { taskId:taskId }, {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  }


};