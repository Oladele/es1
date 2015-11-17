import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['companyId'],
  companyId: null,
  company: Ember.computed('companyId', function(){
		return this.store.find('company', this.get('companyId'));
	}),
});
