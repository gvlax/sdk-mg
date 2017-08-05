
// TODO: Just for development purposes - remove it.
// Use instead AWS_ACCESS_KEY_ID=AKIAJN2WFNZQL2QWGZ6Q AWS_SECRET_ACCESS_KEY=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
// in a command line
process.env.AWS_ACCESS_KEY_ID = 'AKIAJN2WFNZQL2QWGZ6Q';
process.env.AWS_SECRET_ACCESS_KEY = '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';
// ------------------------------------------------------------------------------

const chalk = require('chalk');
const figlet = require('figlet');
const minimist = require('minimist');
const path = require('path');
const fs = require('fs');

const config = require('./config/config');

console.log(
	chalk.yellow(
		figlet.textSync('sdk-mg', {horizontalLayout: 'full'})
	)
);


const loadActionHandlers = handlerDir => {
	const loadedHandlers = [];
	fs.readdirSync(path.join(__dirname, handlerDir)).forEach(
		handlerFile => {
			const handler = require('.' + path.sep + path.join(handlerDir, handlerFile));
			loadedHandlers.push(handler);
		});
	return loadedHandlers;
};

const loadedHandlers = loadActionHandlers(config.optionHandlersPath);

const argv = minimist(process.argv.slice(2));
//console.dir(argv);

const handlersToRun = Object.keys(argv).reduce((handlersToRun, optName) => {
	const matchingHandler = loadedHandlers.find(handler => handler.options.includes(optName));
	if (matchingHandler) {
		matchingHandler.data = argv[optName];
		handlersToRun.push(matchingHandler);
	}
	return handlersToRun;
}, []);

handlersToRun.forEach(el => (async () => await el.runHandler())());