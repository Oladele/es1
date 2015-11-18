import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stat-card', 'Integration | Component | stat card', {
  integration: true
});

test('it renders', function(assert) {
  // assert.expect(2);
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stat-card}}`);
  assert.equal( this.$('.statcard').length, 1 );

  // Template block usage:
  // this.render(hbs`
  //   {{#stat-card}}
  //     template block text
  //   {{/stat-card}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
