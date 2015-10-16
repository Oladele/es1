import Ember from 'ember';

export default Ember.Controller.extend({
	isValid: Ember.computed(
    'model.name',
    {
			get() {
				return !Ember.isEmpty(this.get('model.name'));
			} 
		}
	),
	
	actions: {
    
    save() {
			if (this.get('isValid')) { 
				this.get('model').save().then(
					() => {
						this.transitionToRoute('companies'); 
					},
					(error)=>{
						this.set('errorMessage', error.message);
					}
				);
			} else {
				this.set('errorMessage', 'You have to fill all the fields');
			}
			return false;
		},
		
		cancel() { 
			// this.transitionToRoute('companies');
			// return false; 
			return true; 
		}
  }
});
