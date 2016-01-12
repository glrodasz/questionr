import Backbone from 'backbone';
import Question from '../models/question';

const QuestionList = Backbone.Collection.extend({ model: Question });

export default QuestionList;
