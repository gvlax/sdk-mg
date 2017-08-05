const actionFactory = require('../action-factory');

module.exports = actionFactory({

	name: 'list-buckets',
	options: ['b', 'listBuckets'],

	async handle() {
		console.log(this.extractBucketNames(await this.listBuckets()));
	},

	listBuckets: function listBuckets() {
		return new Promise((resolve, reject) => {
			this.s3.listBuckets({}, function (err, data) {
				if (err) {
					return reject(err);
				}
				resolve(data);
			});
		})
	},

	extractBucketNames: function (data = { Buckets:[] }) {
		return data.Buckets.map(bucket => bucket.Name);
	}
});

