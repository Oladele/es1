import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  networkSites: DS.hasMany('network-site', {async: false})
});
