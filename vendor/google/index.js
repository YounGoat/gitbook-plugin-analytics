var fs = require('fs');
var path = require('path');

var CODE = fs.readFileSync(path.join(__dirname, 'code.html'), 'utf8');
var CODE_TOKEN = fs.readFileSync(path.join(__dirname, 'code_token.html'), 'utf8');

module.exports = function(tracers) {
	if (tracers.length == 1 && Object.keys(tracers[0]).length == 1) {
		return CODE.replace('GA_TOKEN', "'" + tracers[0].token + "'");
	}
	else {
		return CODE_TOKEN.replace('TRACERS_JSON', JSON.stringify(tracers)) + CODE;
	}
};
