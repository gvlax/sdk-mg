const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports = {
	s3: s3,
	name: 'not-set',
	options: ['not-set', 'not-set'],
	data: 'no-value',
	async handle() {
		throw Error('Missing option processing logic.');
	},
	async runHandler() {
		try {
			console.log('Handling an option:', this.options);
			await this.handle();
			console.log('Done');
		} catch(e) {
			console.error('Error:', e);
		}
	}
};

