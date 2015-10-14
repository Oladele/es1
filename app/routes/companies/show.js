import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		delete(company){
			company.destroyRecord().then(() =>{
				this.transitionTo('companies.index');
			});
		}
	}
});
