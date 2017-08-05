const chalk = require('chalk');
const figlet = require('figlet');
const minimist = require('minimist');
const fs = require('fs');

const listAllFiles = require('./actions/list-all-files');
const uploadFile = require('./actions/upload-file');
const listBuckets = require('./actions/list-buckets');
const deleteFilesFromBucket = require('./actions/delete-files');

console.log(
	chalk.yellow(
		figlet.textSync('sdk-mg', { horizontalLayout: 'full' })
	)
);


const actions = {
	"list-all-files" : listAllFiles,
	"upload-file" : uploadFile,
	"list-buckets" : listBuckets,
	"delete-files-from-bucket" : deleteFilesFromBucket
};

actions["upload-file"]();