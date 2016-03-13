import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('forms');
  this.route('collapsible');
  this.route('pagination');
  this.route('collection');
  this.route('nav');
  this.route('sidenav');
  this.route('button');
});

export default Router;
