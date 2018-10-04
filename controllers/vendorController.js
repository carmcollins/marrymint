const db = require("../models");
const Vendors = require("../models/vendors");

// Defining methods for the vendorController
module.exports = {
  findAll: function(req, res) {
    Vendors
      .find({})
      .then(dbVendors => res.json(dbVendors))
      .catch(err => res.status(422).json(err));
  },
  
  findById: function(req, res) {
    console.log(req.params.id);
    db.Users.findOneAndUpdate({_id: req.user._id}, { $push: { vendors: req.params.id } }, { new: true })
  
  .then(function(dbUser) {
    res.json(dbUser);
  })
  .catch(function(err) {
    res.json(err);

  })
},

  findByCategory: function(req, res) {
    Vendors
      .find({category: req.params.category})
      .then(dbVendors => res.json(dbVendors))
      .catch(err => res.status(422).json(err));
  },



findAllUsersVendors: function(req,res){
  db.Users.find({_id: req.user._id}).populate("vendors").then(function(dbUser){
    console.log(dbUser);
    res.json(dbUser);
  })
  .catch(function(err) {
    res.json(err);
  });
}}