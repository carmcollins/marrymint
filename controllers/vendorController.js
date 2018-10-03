const db = require("../models");

// Defining methods for the vendorController
module.exports = {
  findAll: function(req, res) {
    db.Vendors
      .find({})
      .then(dbVendors => res.json(dbVendors))
      .catch(err => res.status(422).json(err));
  },
  
  findById: function(req, res) {
    db.User.findOneAndUpdate({id: req.user._id}, { $push: { vendors: dbVendors._id } }, { new: true })
  
  .then(function(dbUser) {
    res.json(dbUser);
  })
  .catch(function(err) {
    res.json(err);

  })
},



  findByCategory: function(req, res) {
    db.Vendors
      .find({category: req.params.category})
      .then(dbVendors => res.json(dbVendors))
      .catch(err => res.status(422).json(err));
  }

};