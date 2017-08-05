const actionFactory = require('../action-factory');

module.exports = actionFactory({
	name: 'upload-file',
	options: ['u', 'uploadFile'],
	async handle() {
		console.log('Doing with data: ', this.data);
	}
});