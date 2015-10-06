var Backbone = require('backbone'),
  _ = require('underscore');

module.exports = Backbone.Model.extend({
  defaults: {
    description: '',
    value: 0,
    checked: false
  },

  toggle: function() {
    if (this.get('checked')) {
      this.set('checked', false);
    } else {
      this.set('checked', true);
    }
  },

  toJSON: function() {
    var attributes = _.clone(this.attributes);
    attributes.cid = this.cid;
    return attributes;
  }
});
