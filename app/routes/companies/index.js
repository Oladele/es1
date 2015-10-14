import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('company');
	},
	actions: {
		delete(company){
			company.destroyRecord();
			return false;
		}
	}

});
