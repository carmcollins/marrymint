import axios from "axios";


export default {

  //USER
  JWT: false,
  setJWT: function (token) {
    this.JWT = token;
    window.localStorage.setItem("JWT", token)
    this.onLogin();
  },
  getJWT: function () {
    return this.JWT;
  },
  isLoggedIn: function () {
    return this.JWT == true;
  },
  logout(){
    this.onLogout();
    this.JWT = false;
    window.localStorage.setItem("JWT", "")
    console.log("LOGGED OUT");
  },
  setLoginFn(fn){
    this.loginFn = fn
  },
  setLogoutFn(fn){
    this.logoutFn = fn
  },
  onLogin(){
    if(this.loginFn){
      this.loginFn()
    }
  },
  onLogout(){
    if(this.logoutFn){
      this.logoutFn()
    }
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
  loginUser(email, password){
    return axios.post("/api/users/login", { email, password }).then((response) => {
      if (response.data.token) {
        this.setJWT(response.data.token);
        this.onLogin()
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
    return axios.get("/api/vendors/", {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    } );
  },
  // Gets the book with the given id
  getVendorByCategory: function (category) {
    return axios.get("/api/vendors/" + category, {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },
  getVendorById: function (id) {
    return axios.get("/api/vendors/" + id, {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
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