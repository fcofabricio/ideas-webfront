import { module, test } from 'qunit';
import { setupTest } from 'ideas-webfront/tests/helpers';

module('Unit | Model | idea', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('idea', {});
    assert.ok(model);
  });
});
