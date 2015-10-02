var Backbone = require('backbone'),
  _ = require('underscore'),
  Answer = require('../models/answer');

module.exports = Backbone.Collection.extend({
  model: Answer
});
