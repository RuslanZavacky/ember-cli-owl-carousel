import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('owl-carousel2', 'Integration | Component | owl carousel2', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{owl-carousel2}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#owl-carousel2}}
      template block text
    {{/owl-carousel2}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
