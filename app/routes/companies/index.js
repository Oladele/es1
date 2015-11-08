import Ember from 'ember';

export default Ember.Route.extend({
	model() {

		let response = this.store.query('company', 
			{
				include: 'network-sites'
			}
		);

		return response;

	}
});
