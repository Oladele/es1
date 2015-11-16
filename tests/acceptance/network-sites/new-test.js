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
  visit('/network-sites/new');

  andThen(function() {
    assert.equal(currentURL(), '/network-sites/new');
  });
});
