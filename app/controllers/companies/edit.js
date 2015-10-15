import CompaniesBaseController from './base';

export default CompaniesBaseController.extend({
	actions: {		
		cancel() { 
			this.transitionToRoute('companies.show', this.get('model'));
			return false; 
		}
  }

});
