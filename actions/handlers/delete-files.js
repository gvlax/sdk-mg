const actionFactory = require('../action-factory');
const config = require('../../config/config');

module.exports = actionFactory({

	name: 'delete-files',
	options: ['d', 'deleteFiles'],

	async handle() {
		console.log('Object deleted: ', await this.deleteObjects());
	},

	deleteObjects: function deleteObjects() {
		const params = {
			Bucket: config.aws.bucket,
			Key: this.data
		};
		return new Promise((resolve, reject) => {
			this.s3.deleteObject(params, function (err, data) {
				if (err) {
					return reject(err);
				}
				resolve(data);
			});
		});
	}

});