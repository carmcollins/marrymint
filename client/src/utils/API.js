import axios from "axios";

export default {

  JWT: false,

  setJWT: function (token) {
    this.JWT = token;
    window.localStorage.setItem("JWT", token);
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
    window.localStorage.setItem("JWT", "");
  },

  setLoginFn(fn){
    this.loginFn = fn;
  },

  setLogoutFn(fn){
    this.logoutFn = fn;
  },

  onLogin(){
    if(this.loginFn){
      this.loginFn();
    };
  },

  onLogout(){
    if(this.logoutFn){
      this.logoutFn();
    };
  },

  getUser: function() {
    return axios.get("/api/users/findById", {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },
  
  loginUser(email, password){
    return axios.post("/api/users/login", { email, password }).then((response) => {
      if (response.data.token) {
        this.setJWT(response.data.token);
        this.onLogin();
      };
      return Promise.resolve(response);
    });
  },

  todo: function () {
    return axios.get("/api/to-do-list", {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },

  saveUser: function (newUser) {
    return axios.post("/api/users", newUser);
  },

  getRSVPS: function () {
    return axios.get("/api/rsvps/", {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },

  updateRSVPAttend: function (RSVPid) {
    return axios.put("/api/rsvps/attend", { RSVPid :RSVPid}, {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },

  updateRSVPNotAttend: function (RSVPid) {
    return axios.put("/api/rsvps/noattend", { RSVPid :RSVPid}, {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },

  addRSVP: function(name) {
    return axios.post("/api/rsvps/", { name: name}, {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },

  getVendors: function () {
    return axios.get("/api/vendors/", {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },

  deleteVendor: function(vendorsId) {
    return axios.put("/api/vendors/", {vendorsId:vendorsId}, {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },

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

  getUsersVendors: function () {
    return axios.get("/api/vendors/users/", {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },

  getUserForVendor: function () {
    return axios.get("/api/vendors/user/", {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },

  getTasks: function () {
    return axios.get("/api/tasks", {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },

  getTask: function (id) {
    return axios.get("/api/tasks/" + id, {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  },

  updateTask: function (taskId) {
    return axios.put("/api/tasks/", { taskId:taskId }, {
      headers: {
        Authorization: `Bearer ${this.JWT}`
      }
    });
  }
};