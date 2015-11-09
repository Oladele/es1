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

    this.route('edit', {
      path: ':company_id/edit'
    });
  });

  this.route('network-sites', function() {
    this.route('show',{
      path: ':network_site_id'
    });
  });
  this.route('building');

  this.route('buildings', function() {
    this.route('show');
  });
});

export default Router;
