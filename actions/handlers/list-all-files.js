const actionFactory = require('../action-factory');
const config = require('../../config/config');

module.exports = actionFactory({

	name: 'list-all-files',
	options: ['l', 'listAllFiles'],

	async handle() {
		console.log(`List of files in a bucket:`);
		console.dir(this.extractFileNames(await this.listObjects()));
	},

	listObjects: function listObjects() {
		return new Promise((resolve, reject) => {
			const params = {
				Bucket: this.data != true /*set to true if no opt value - minimist specific*/ ? this.data : config.aws.bucket
			};
			this.s3.listObjectsV2(params, function (err, data) {
				if (err) {
					return reject(err);
				}
				resolve(data);
			});
		});
	},

	extractFileNames: function (data = {Contents: []}) {
		return data.Contents.map(obj => obj.Key);
	}
});

