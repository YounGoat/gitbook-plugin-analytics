#	GitBook Plugin Analytics

##	How to run?

Firstly, edit *book.json* which should be located at the root dir of a gitbook. If it does not exist, create it!

```javascript
// book.json
{
	// ...

	"plugins": [
		// ...,
		"analytics"
	],

	"pluginsConfig": {
		// ...,
		"analytics": {
			"google": "TOKEN-1",
			"baidu": "TOKEN-2"
		}
	}
}
```

Secondly, run the next commands to active the plugin:

```bash
# Change dir to the gitbook's root dir.

# Install the plugins.
gitbook install

# Build the the book,
gitbook Build
# OR, serve it.
gitbook serve
```

##	How to config?

As the previous section described, it is easy to active [Google Analytics](https://analytics.google.com) or [Baidu Tongji](http://tongji.baidu.com) by adding responding tokens in ```pluginsConfig```. *gitbook-plugin-analytics* accept multiform configs for more complex situations.

```javascript
{
	"pluginsConfig": {
		// ...,
		"analytics": [
			// ...,
			{
				"vendor": "google",
				"token": "TOKEN-1",
				"base": "http://book.example.com/mybook/"
			}
		]
	}
}
```

```javascript
{
	"pluginsConfig": {
		// ...,
		"analytics": {
			// ...,
			"google": {
				"token": "TOKEN-1",
				"host": "book.example.com",
				"protocol": "https",
				"path": "/mybook"
			}
		}
	}
}
```
