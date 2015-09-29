var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    description: '',
    value: 0,
    checked: false
  }
});