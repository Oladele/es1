import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.query('company', {include: 'network-sites'});
	},

	setupController(controller, model){

		//companies
		controller.set('companies',model);
		
		//networkSites
		this.store.findAll('network-site').then(function(sites) {
      controller.set('networkSites', sites);
    });
	}
});
