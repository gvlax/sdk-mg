const actionFactory = require('../action-factory');

module.exports = actionFactory({
	name: 'delete-files',
	options () {
		return ['d', 'deleteFiles'];
	}
});