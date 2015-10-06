var Backbone = require('backbone'),
  $ = require('jquery'),
  _ = require('underscore');


module.exports = Backbone.View.extend({
  tagName: 'article',

  template: _.template($('#question-template').html()),

  events: {
    'click input': 'markAnswer'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  markAnswer: function() {
    console.log('Answer marked');
  }
});
