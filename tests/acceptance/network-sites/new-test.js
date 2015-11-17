import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'noovis-app2-ember/tests/helpers/start-app';

module('Acceptance | network sites/new', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /network-sites/new', function(assert) {
  var company = server.create('company', {name: "ACME"});
  var companyId = company.id;

  visit('/network-sites/new?companyId='+companyId);

  andThen(function() {
    assert.equal(currentURL(), '/network-sites/new?companyId='+companyId);
    assert.equal(
      find('[data-role=company-name]:contains("ACME")').length, 1,
      "New network-site contains name of company");
  });
});

test('Can create new network-site', function(assert) {
  var company = server.create('company', {name: "ACME"});
  var companyId = company.id; 
  visit('/network-sites/new?companyId='+companyId);

  fillIn('.network-site-name', 'New Site');

  click('button[type="submit"]');

  andThen(function() {
    // pauseTest();
    assert.equal(currentURL(), '/companies');
    assert.equal(
      find('[data-role=network-site-link]:contains("New Site")').length, 1,
      "List companies links contains the new network-site");
  });
});
