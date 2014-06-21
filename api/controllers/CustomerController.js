/**
 * CustomerController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  index: function(req, res) {
    Customer.find().exec(function(err, customers) {
      if (err) res.send(err, 500);
      res.json(customers);
    });
  },

  edit: function(req, res) {
    Customer.find( {id: req.params.id} ).exec(function(err, customer) {
      if (err) res.send(err, 500);
      res.json(customer);
    });
  },

  create: function(req, res) {

  },

  destroy: function(req, res) {

  },

  archive: function(req, res) {

  },

  unarchive: function(req, res) {

  },

  listArchived: function(req, res) {

  },

  partialsWithFolder: function(req, res) {
    res.render('partials/' + req.param('folder') + '/' + req.param('file'))
  }


};
