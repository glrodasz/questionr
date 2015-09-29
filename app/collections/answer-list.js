var Backbone = require('backbone'),
  Answer = require('../models/answer');

module.exports = Backbone.Collection.extend({
  model: Answer
});