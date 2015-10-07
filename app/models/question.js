var Backbone = require('backbone'),
  AnswerList = require('../collections/answer-list'),
  _ = require('underscore');

module.exports = Backbone.Model.extend({
  defaults: {
    name: null,
    image: null,
    description: '',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Respuesta generica 1',
        value: 0,
        checked: false
      },
      {
        description: 'Respuesta generica 2',
        value: 0,
        checked: false
      },
      {
        description: 'Respuesta generica 3',
        value: 0,
        checked: false
      }
    ])
  },

  initialize: function(options) {
    var answersList = this.get('answersList'),
      defaultAnswersList = this.defaults.answersList.toJSON();

    if(options && options.answersList && options.multiple) {
      answersList.reset(
        _.shuffle(
          _.uniq(
            _.union(
              answersList.toJSON(),
              defaultAnswersList
            ),
            false,
            _.property('description')
          )
        )
      );
    }
  },

  getScore: function() {
    return this.get('answersList').reduce(function(memo, answer) {
      return memo + (answer.get("checked") ? answer.get("value") : 0);
    }, 0);
  }
});
