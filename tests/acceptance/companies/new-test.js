import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'noovis-app2-ember/tests/helpers/start-app';

var application;

module('Acceptance | companies/new', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /companies/new', function(assert) {
  visit('/companies/new');

  andThen(function() {
    assert.equal(currentURL(), '/companies/new');
  });
});
