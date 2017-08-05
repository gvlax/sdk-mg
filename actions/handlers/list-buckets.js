const actionFactory = require('../action-factory');

module.exports = actionFactory({

	name: 'list-buckets',
	options: ['b', 'listBuckets'],

	async handle() {
		console.log('List of buckets:');
		console.dir(this.extractBucketNames(await this.listBuckets()));
	},

	listBuckets: function listBucket() {
		return new Promise((resolve, reject) => {
			this.s3.listBuckets({}, function (err, data) {
				if (err) {
					return reject(err);
				}
				resolve(data);
			});
		});
	},

	extractBucketNames: function (data = {Buckets: []}) {
		return data.Buckets.map(bucket => bucket.Name);
	}
});

