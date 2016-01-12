import Backbone from 'backbone';
import _ from 'underscore';

const Answer = Backbone.Model.extend({
  defaults: {
    description: '',
    value: 0,
    checked: false
  },

  toggle() {
    if (this.get('checked')) {
      this.set('checked', false);
    } else {
      this.set('checked', true);
    }
  },

  toJSON() {
    const attributes = _.clone(this.attributes);
    attributes.cid = this.cid;
    return attributes;
  }
});

export default Answer;
