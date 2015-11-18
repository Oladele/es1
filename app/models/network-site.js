import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  lat: DS.attr('number'),
  lng: DS.attr('number'),
  company: DS.belongsTo('company', {async:true}),
  buildings: DS.hasMany('building', {async: true})
});
