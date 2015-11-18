import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['companyId'],
  companyId: null,
  company: Ember.computed('companyId', function(){
		return this.store.find('company', this.get('companyId'));
	}),

	isValid: Ember.computed(
    'model.name',
    {
			get() {
				return !Ember.isEmpty(this.get('model.name'));
			} 
		}
	),

	actions: {

		updateLocation: function(location) { 
			this.get('model').set('lat', location.latLng.lat);
			this.get('model').set('lng', location.latLng.lng);
		},
    
    save() {
			if (this.get('isValid')) { 
				this.get('model').set('company', this.get('company'));
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
			this.transitionToRoute('companies');
			return false; 
		}
  }
});
