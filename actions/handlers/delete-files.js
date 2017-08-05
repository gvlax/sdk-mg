const actionFactory = require('../action-factory');

module.exports = actionFactory({
	name: 'delete-files',
	options: ['d', 'deleteFiles'],
	handle() {
		console.log('Doing with data: ', this.data);
	}
});