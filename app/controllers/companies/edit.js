import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {		
		cancel() { 
			this.transitionToRoute('companies.show', this.get('model'));
			return false; 
		}
  }

});
