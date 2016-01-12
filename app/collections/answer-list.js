import Backbone from 'backbone';
import Answer from '../models/answer';

const AnswerList = Backbone.Collection.extend({ model: Answer });

export default AnswerList;
