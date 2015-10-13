import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.createRecord('company');
	},

	actions: {
    
    save() {
      console.log('+-- save action in company new route');
			return true; 
		},
    
    cancel() {
      console.log('+-- cancel action in company new route');
      return true;
    }
  }

});
