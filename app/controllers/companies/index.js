import Ember from 'ember';

export default Ember.Controller.extend({

	companiesCount: Ember.computed.alias('companies.length'),
	networkSitesCount: Ember.computed.alias('networkSites.length')

});
