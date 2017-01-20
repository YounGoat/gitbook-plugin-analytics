var MODULE_REQUIRE
	/* built-in */
	, url = require('url')
	/* NPM */
	// , md = require('markdown-it')()
	/* in-package */
	;


var vendors = [ 'baidu', 'google' ];
var tracers = {};

function pushTracer(vendor, options) {
	if (arguments.length == 1) {
		options = arguments[0];
		vendor = options.vendor;
		delete options.vendor;
	}

	if (arguments.length == 2 && typeof arguments[1] == 'string') {
		options = {
			token: arguments[1]
		};
	}

	if (vendors.indexOf(vendor) < 0) {
		return;
	}

	if (options) {
		if (options.base) {
			var info = url.parse(options.base);
			options = {
				protocol: info.protocol,
				host: info.hostname,
				path: info.path
			};
		}
		if (options.hostname) {
			options.host = options.hostname;
			delete options.hostname;
		}
		if (options.protocol && options.protocol.substr(-1) != ':') {
			options.protocol += ':';
		}
	}

	var tracer = tracers[vendor];
	if (!tracer) {
		tracers[vendor] = [ options ];
	}
	else {
		tracer.push(options);
	}
}

module.exports = {
    // Map of hooks
    hooks: {
		"init": function() {
			var config = this.config.get('pluginsConfig.analytics');

			vendors.forEach(function(vendor) {
				if (config[vendor]) {
					pushTracer(vendor, config[vendor]);
				}
			});

			if (config instanceof Array) {
				config.forEach(function(options) {
					pushTracer(options);
				});
			}

			console.log(tracers);
		},

		"page": function(page) {
			for (var vendor in tracers) {
				var render = require('./vendor/' + vendor);
				page.content += render(tracers[vendor]);
			}
			return page;
		}
	},

    // Map of new blocks
    blocks: {
	},

    // Map of new filters
    filters: {}
};
