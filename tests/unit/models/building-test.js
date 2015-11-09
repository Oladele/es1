import { moduleForModel, test } from 'ember-qunit';

moduleForModel('building', 'Unit | Model | building', {
  // Specify the other units that are required for this test.
  needs: ['model:network-site']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
