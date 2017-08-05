const actionFactory = require('../action-factory');
const fs = require('fs');
const path = require('path');
const config = require('../../config/config');

module.exports = actionFactory({

	name: 'upload-file',
	options: ['u', 'uploadFile'],

	async handle() {
		console.log('File uploaded: ', await this.uploadFile());
	},

	uploadFile: function uploadFile() {
		return new Promise((resolve, reject) => {
			const params = {
				Bucket: config.aws.bucket,
				Key: path.parse(this.data).base,
				Body: fs.createReadStream(this.data)
			};
			this.s3.putObject(params, function(err, data){
				if(err){
					return reject(err);
				}
				resolve(data);
			});
		});
	}
});

