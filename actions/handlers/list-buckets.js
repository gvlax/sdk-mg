const actionFactory = require('../action-factory');

module.exports = actionFactory({
	name: 'list-buckets',
	options () {
		return ['b', 'listBuckets'];
	}
});