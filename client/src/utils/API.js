import axios from "axios";


export default {
  // Gets user from login id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Add new user to the database
  saveArticle: function(userInfo) {
    return axios.post("/api/users", userInfo);
  }
};