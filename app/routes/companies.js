import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    
    save() {
      console.log('+--- save action in company route');
			return false; 
		},
    
    cancel() {
      console.log('+--- cancel action in company route');
      return false;
    }
  }
});
