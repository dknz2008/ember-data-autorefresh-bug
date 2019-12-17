import Route from '@ember/routing/route';
import { task, timeout } from 'ember-concurrency';

export default Route.extend({
  refreshInterval: 2 * 1000,
  model() {
    this.store.unloadAll();
    return this.store.findAll('boardgame')
  },
  autoRefreshTimer: task(function *() {
    while (true) {
      yield timeout(this.refreshInterval);
      this.refresh();
    }
  }).on('init'),
});
