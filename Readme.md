# co-highrise

a wrapper of node-highrise-api for generators.

## Installation

	$ npm install co-highrise
	
## Usage

```
var co = require('co');
var highrise = require('co-highrise');

var client = new highrise({
  username: '<company-username>',
  token: '<user-token>'
});

co(function *() {
  var people = yield client.people.get();
  console.log(people);
})();
```
## References

  - [basecamp/highrise-api](https://github.com/basecamp/highrise-api)
  - [florianholzapfel/node-highrise-api](https://github.com/florianholzapfel/node-highrise-api)

## License

The MIT License (MIT)