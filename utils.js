var MODULE_REQUIRE
	/* built-in */

	/* NPM */
	, colors = require('colors')
	/* in-package */
	;

function print(msg) {
	console.log(colors.green('[ analytics ] ') + msg);
};

module.exports = {
	log: function(msg, args) {
		print(msg);
	},

	warn: function(msg) {
		print(colors.yellow(msg));
	},

	error: function(msg) {
		print(colors.red(msg));
		print('We are so sorry that gitbook ceased forcely.');
		process.exit(1);
	}
};
