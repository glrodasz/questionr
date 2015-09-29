var Backbone = require('backbone'),
  Question = require('../models/question');

module.exports = Backbone.Collection.extend({
  model: Question
});