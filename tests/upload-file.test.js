const chai = require('chai');
const expect = chai.expect;

const uploadFile = require('../actions/upload-file');

describe('uploadFileTest', function() {
	it('should output just a string', function() {
		expect(uploadFile()).to.be.a('string');
	});
});