import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'noovis-app2-ember/tests/helpers/start-app';

module('Acceptance | companies/list', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /companies', function(assert) {
  server.createList('company', 3);
  server.create('company', {name: "ACME"});
  visit('/companies');

  andThen(function() {
    assert.equal(currentURL(), '/companies');
    assert.equal(find('.company-link').length, 4, "All company links are rendered");
    assert.equal(find('.company-link:contains("ACME")').length, 1, "List companies links contains the company name");
  });
});
