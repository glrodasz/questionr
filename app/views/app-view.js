var Backbone = require('backbone'),
  QuestionList = require('../collections/question-list'),
  AnswerList = require('../collections/answer-list');

module.exports = Backbone.View.extend({
  el: '.question-app',

  initialize: function() {
    this.questionList = new QuestionList([
      {
        'image': 'desierto.png',
        'description': 'Si me quedo sin agua en el desierto, ¿Que puedo hacer?',
        'multiple': true,
        'answersList': new AnswerList([
          {
            'description': 'Beber de un cactus'
          }
        ])
      },
      {
        'image': 'cielo.png',
        'description': '¿De que color es el cielo?',
        'multiple': true,
        'answersList': new AnswerList([
          {
            'description': 'Azul',
            'value': 6
          },
          {
            'description': 'Morado',
            'value': 6
          },
          {
            'description': 'Blanco',
            'value': 6
          },
          {
            'description': 'No tiene color',
            'value': 2
          },
          {
            'description': 'Respuesta generica 2',
            'value': 20
          }
        ])
      }
    ]);

    this.questionList.forEach(function(question) {
      var answersList = question.get('answersList');

      console.log('Question:', question.get('description'));

      if (answersList) {
        answersList.forEach(function(answer) {
          console.log('Answer:', answer.get('description'), ', Value:', answer.get('value'));
        });
      }
    });
  },

  render: function() {

  }
});