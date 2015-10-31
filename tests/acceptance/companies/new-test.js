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

test('Can create new company', function(assert) {
  visit('/companies/new');
  fillIn('.company-name', 'New Company');

  click('button[type="submit"]');

  andThen(function() {
    assert.equal(currentURL(), '/companies');
    assert.equal(
      find('.company-link:contains("New Company")').length, 1,
      "List companies links contains the new company");
  });
});
