import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

// app-specific config
//http://guides.emberjs.com/v2.1.0/templates/binding-element-attributes/
//To enable support for data attributes an attribute binding must be added to the component, e.g. Ember.LinkComponent or Ember.TextField for the specific attribute:
Ember.LinkComponent.reopen({
  attributeBindings: ['data-role']
});
// end

export default App;
