const actionFactory = require('../action-factory');

module.exports = actionFactory({
	name: 'upload-file',
	options () {
		return ['u', 'uploadFile'];
	}
});