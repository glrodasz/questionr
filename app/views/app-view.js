import Backbone from 'backbone';
import QuestionList from '../collections/question-list';
import QuestionView from '../views/question-view';
import questionListData from '../data/question-list-data';

const AppView = Backbone.View.extend({
  el: '.question',

  events: {
    'click .prev': 'getPrev',
    'click .next': 'getNext'
  },

  initialize() {
    this.questionIndex = 0;

    this.$prev = this.$('#prev-button');
    this.$next = this.$('#next-button');
    this.$finish = this.$('#finish-button');

    this.questionList = new QuestionList(questionListData);

    this.questionMaxIndex = this.questionList.size() - 1;
    this.render();
  },

  render() {
    this.setCurrentQuestion();
    this.renderQuestion();
    this.renderButtons();
  },

  renderButtons() {
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

  renderQuestion() {
    this.currentQuestionView = new QuestionView({ model: this.currentQuestion });

    this.$('.question__content')
      .html(this.currentQuestionView.render().el);
    this.$('.question__footer__counter')
      .text(`${this.questionIndex + 1}/${this.questionMaxIndex + 1}`);
  },

  setCurrentQuestion() {
    this.currentQuestion = this.questionList.at(this.questionIndex);
  },

  getNext() {
    if (this.questionIndex < this.questionMaxIndex) {
      this.questionIndex++;
      this.render();
      this.saveScore();
    } else {
      this.questionIndex = this.questionMaxIndex;
    }
  },

  getPrev() {
    if (this.questionIndex > 0) {
      this.questionIndex--;
      this.render();
      this.saveScore();
    } else {
      this.questionIndex = 0;
    }
  },

  saveScore() {
    const totalScoreSum = this.questionList.reduce((memo, question) => {
      return memo + question.getScore();
    }, 0);

    localStorage.setItem('score', totalScoreSum);
  }
});

export default AppView;
