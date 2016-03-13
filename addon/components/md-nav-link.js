import Ember from 'ember';
import layout from '../templates/components/md-nav-link';

export default Ember.LinkComponent.extend({
  classNames: ['md-nav-link'],
  layout,
  tagName: 'li'
});