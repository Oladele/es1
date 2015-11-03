import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'noovis-app2-ember/tests/helpers/start-app';

module('Acceptance | network sites/show', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /network-sites/show', function(assert) {
  var acmeCompany = server.create('company', {name: "ACME"});
  var acmeSite = server.create('network-site', {name: "ACME Site", company: acmeCompany.id});

  visit(`/network-sites/${acmeSite.id}`);

  andThen(function() {
    assert.equal(currentURL(), `/network-sites/${acmeSite.id}`);
    assert.equal(find(
      '[data-role=network-site-details-title]:contains("ACME Site")').length, 
      1,
      "Network Site details title contains the site name");
  });
});
