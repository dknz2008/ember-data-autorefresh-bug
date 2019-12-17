import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // host: 'http://api-for-simplest-ember-data-crud.com',
  namespace: 'api' // a way for me to use http-mock
});
