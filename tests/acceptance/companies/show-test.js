import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'noovis-app2-ember/tests/helpers/start-app';

module('Acceptance | companies/show test', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /companies/show-test', function(assert) {
  visit('/companies/show-test');

  andThen(function() {
    assert.equal(currentURL(), '/companies/show-test');
  });
});
