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
    // Variables
    this.questionIndex = 0;

    // DOM elements
    this.$prev = this.$("#prev-button");
    this.$next = this.$("#next-button");
    this.$finish = this.$("#finish-button");

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

    this.questionMaxIndex = this.questionList.size() - 1;
    this.render();
    //this.logQuestionList();
  },

  render: function() {
    this.setCurrentQuestion();
    this.renderQuestion();
    this.renderButtons();
  },

  renderButtons: function() {
    if (this.questionIndex <= 0) {
      this.$prev.hide();
    } else if (this.questionIndex >= this.questionMaxIndex) {
      this.$next.hide();
      this.$finish.show();
    } else {
      this.$prev.show();
      this.$next.show();
      this.$finish.hide();
    }
  },

  renderQuestion: function(question) {
    this.currentQuestionView = new QuestionView({ model: this.currentQuestion });
    this.$('.question').html(this.currentQuestionView.render().el);
  },

  setCurrentQuestion: function() {
    this.currentQuestion = this.questionList.at(this.questionIndex);
  },

  getNext: function() {
    if (this.questionIndex < this.questionMaxIndex) {
      this.questionIndex++;
      this.render();
    } else {
      this.questionIndex = this.questionMaxIndex;
    }
  },

  getPrev: function() {
    if (this.questionIndex > 0) {
      this.questionIndex--;
      this.render();
    } else {
      this.questionIndex = 0;
    }
  },

  logQuestionList: function() {
    this.questionList.forEach(function(question) {
      var answersList = question.get('answersList');

      console.log('\nQuestion:', question.get('description'));

      if (answersList) {
        answersList.forEach(function(answer) {
          console.log('\tAnswer:', answer.get('description'), ', Value:', answer.get('value'));
        });
      }
    });
  }
});