
const action = require('./base-action');
module.exports = handler => Object.assign(Object.create(action), handler);