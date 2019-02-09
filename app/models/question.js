import Backbone from 'backbone';
import AnswerList from '../collections/answer-list';
import _ from 'underscore';

const Question = Backbone.Model.extend({
  defaults: {
    name: null,
    image: null,
    description: '',
    multiple: false,
    answersList: new AnswerList([])
  },

  initialize(options) {
    const answersList = this.get('answersList');
    const defaultAnswersList = this.defaults.answersList.toJSON();

    /**
     *  If the Question has multiple selection the idea here is make a shuffle
     *  with the default answers and answers passed as parameter. The trick is
     *  that if the answers passed as parameter has the same description of any
     *  default answer it will be overrided with the value passed as parameter.
     */
    if (options && options.answersList && options.multiple) {
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

  getScore() {
    return this.get('answersList').reduce((memo, answer) => {
      return memo + (answer.get('checked') ? answer.get('value') : 0);
    }, 0);
  }
});

export default Question;
