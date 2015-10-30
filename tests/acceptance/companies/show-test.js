import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'noovis-app2-ember/tests/helpers/start-app';

module('Acceptance | companies/show', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Can see company details', function(assert) {
  var company = server.create('company', {name: "ACME"});
  console.log('companies show-test company:', company);
  
  visit(`/companies/${company.id}`);
  console.log('companies show-test url:', `/companies/${company.id}`);

  andThen(function() {
    assert.equal(
      find('.company-details-title:contains("ACME")').length, 1,
      "Company details title contains the company name");
  });

});
