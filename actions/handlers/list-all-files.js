const actionFactory = require('../action-factory');

module.exports = actionFactory({
	name: 'list-all-files',
	options () {
		return ['l', 'listAllFiles'];
	}
});

