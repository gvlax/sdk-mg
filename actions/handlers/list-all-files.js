const actionFactory = require('../action-factory');
const config = require('../../config/config');

module.exports = actionFactory({
	name: 'list-all-files',
	options: ['l', 'listAllFiles'],
	async handle() {
/*		this.s3Client.getBucketLogging(params, function(err, data) {
			if (err) console.log(err, err.stack); // an error occurred
			else     console.log(data);           // successful response

		});*/
		var params = {
			Bucket: config.aws.bucket,
			CreateBucketConfiguration: {
				LocationConstraint: "eu-west-1"
			}
		};
		this.s3Client.createBucket(params, function(err, data) {
			if (err) console.log(err, err.stack); // an error occurred
			else     console.log(data);           // successful response
		});

/*

		this.s3Client.waitFor('bucketExists', params, function(err, data) {
			if (err) console.log(err, err.stack); // an error occurred
			else     console.log(data);           // successful response
		});
*/

	}
});

