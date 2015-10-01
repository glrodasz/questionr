var Backbone = require('backbone'),
  QuestionList = require('../collections/question-list'),
  QuestionView = require('../views/question-view'),
  AnswerList = require('../collections/answer-list');

module.exports = Backbone.View.extend({
  el: '.question-app',

  events: {
    'click .prev': 'getPrev',
    'click .next': 'getNext'
  },

  initialize: function() {
    this.listenTo(this.questionList, 'reset', this.render);

    this.questionIndex = 0;
    this.questionList = new QuestionList([
      {
        'name': 'c1',
        'image': '',
        'description': 'Si me quedo sin agua en el desierto, ¿Que puedo hacer?',
        'multiple': false,
        'answersList': new AnswerList([
          {
            'description': 'Beber de un cactus',
            'value': 2
          }
        ])
      },
      {
        'name': 'c2',
        'image': '',
        'description': '¿Cuantas tasas de cafe se puede tomar uno sin morir?',
        'multiple': false,
        'answersList': new AnswerList([
          {
          'description': '98',
            'value': 0
          },
          {
            'description': '27',
            'value': 30
          },
          {
            'description': '52',
            'value': 0
          }
        ])
      },
      {
        'name': 'e1',
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
      },
      {
        'name': 'e2',
        'image': 'luna.png',
        'description': '¿Que tan lejos queda la luna?',
        'multiple': true,
        'answersList': new AnswerList([
          {
            'description': '100 KM',
            'value': 6
          },
          {
            'description': '0.5 años luz',
            'value': 6
          }
        ])
      }
    ]);

    this.render();

    // TODO Remover
    this.questionList.forEach(function(question) {
      var answersList = question.get('answersList');

      console.log('\nQuestion:', question.get('description'));

      if (answersList) {
        answersList.forEach(function(answer) {
          console.log('\tAnswer:', answer.get('description'), ', Value:', answer.get('value'));
        });
      }
    });
  },

  render: function() {
    this.currentQuestion = this.questionList.at(this.questionIndex);
    this.renderQuestion();
  },

  renderQuestion: function(question) {
    this.currentQuestionView = new QuestionView({ model: this.currentQuestion });
    this.$el.html(this.currentQuestionView.render().el);
  },

  getNext: function() {

  },

  getPrev: function() {

  }
});