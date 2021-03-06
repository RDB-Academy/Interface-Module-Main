import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('profile');
  this.route('achievments');
  this.route('leaderboard');
});

export default Router;
