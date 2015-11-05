import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		let store = this.store;

		let response = this.store.query('company', 
			{
				include: 'network-sites'
			}
		).then((companies)=>{
			companies.forEach((company)=>{

				company.storedNetworkSites = store.filter('network-site',(ns)=>{
					// return ns.get('company').get("id") == company.id;
					return company.get('networkSites').indexOf(ns) >= 0;
				});
			})
			return companies
		})

		return response;

	}
});
