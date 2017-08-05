const chalk = require('chalk');
const figlet = require('figlet');
const minimist = require('minimist');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const ACTION_HANDLERS_PATH = './actions/handlers';

console.log(
	chalk.yellow(
		figlet.textSync('sdk-mg', {horizontalLayout: 'full'})
	)
);


const loadActionHandlers = handlerDir => {
	const handlerMap = [];
	fs.readdirSync(path.join(__dirname, handlerDir)).forEach(
		handlerFile => {
			const handler = require('.' + path.sep + path.join(handlerDir, handlerFile));
			handlerMap.push(handler.options(), handler);
		});
	return handlerMap;
};


const optionHandlers = loadActionHandlers(ACTION_HANDLERS_PATH);


const argv = minimist(process.argv.slice(2));
console.dir(argv);

const handlersToRun = Object.keys(argv).map( () => {});

