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
  visit('/companies');

  andThen(function() {
    assert.equal(currentURL(), '/companies');
    assert.equal(find('.company-link').length, 2, "All company links are rendered");
    assert.equal(find('.company-link:contains("ACME")').length, 1, "First company link contains the company name");
    assert.equal(find('.company-link:contains("Nabisco")').length, 1, "The other company link contains the company name");
  });
});
