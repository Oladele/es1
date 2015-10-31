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
  
  visit(`/companies/${company.id}`);

  andThen(function() {
    assert.equal(
      find('.company-details-title:contains("ACME")').length, 1,
      "Company details title contains the company name");
  });
});

test('Can click to edit from company details', function(assert) {
  var company = server.create('company', {name: "ACME"});
  
  visit(`/companies/${company.id}`);
  click('.company-edit');

  andThen(function() {
    assert.equal(currentURL(), `/companies/${company.id}/edit`);
  });
});

test('Can click to delete from company details', function(assert) {
  var company = server.create('company', {name: "ACME"});
  
  visit(`/companies/${company.id}`);
  click('.company-delete');

  andThen(function() {
    assert.equal(currentURL(), '/companies');
  });
  assert.equal(
      find('.company-link:contains("ACME")').length, 0,
      "List companies does not contain the deleted company");
});
