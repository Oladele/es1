import CompaniesBaseController from './base';

export default CompaniesBaseController.extend({
	actions: {

		cancel() { 
			this.transitionToRoute('companies.index');
			return false; 
		}

  }
});
