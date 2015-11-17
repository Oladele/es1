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
