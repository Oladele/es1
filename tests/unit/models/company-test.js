import { moduleForModel, test } from 'ember-qunit';

moduleForModel('company', 'Unit | Model | company', {
  // Specify the other units that are required for this test.
  needs: ['model:networkSite']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
