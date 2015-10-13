import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('companies', function(){
    this.route('new', {});

    this.route('show', {
      path: ':company_id'
    });
  });
});

export default Router;
