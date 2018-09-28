const db = require("../models");

// Defining methods for the vendorController
module.exports = {
  findAll: function(req, res) {
    db.Vendors
      .find(req.query)
      .then(dbVendors => res.json(dbVendors))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Vendors
      .findById(req.params.id)
      .then(dbVendor => res.json(dbVendor))
      .catch(err => res.status(422).json(err));
  }
};