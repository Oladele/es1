/* global globalVendorThemeDashboardToolkit*/
/* global globalVendorThemeDashboardApplication*/
import Ember from 'ember';

export default Ember.Component.extend({

	didInsertElement: function(){
		 globalVendorThemeDashboardToolkit();
		 globalVendorThemeDashboardApplication();
	}

});
