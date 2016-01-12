import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const QuestionView = Backbone.View.extend({
  tagName: 'article',

  template: _.template($('#question-template').html()),

  events: {
    'click input': 'markAnswer'
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  markAnswer(event) {
    const cid = $(event.currentTarget).data('id');
    this.model.get('answersList').get(cid).toggle();
  }
});

export default QuestionView;
