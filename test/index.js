
var co = require('co');
var highrise = require('..');

var username = '<company-username>';
var token = '<user-token>';

var client = new highrise({
  username: username,
  token: token
});

describe('highrise', function() {
  describe('deals', function() {
    it('should be wrapped', function(done) {
      co(function *() {
        var account = yield client.account.get();
        account.subdomain.should.equal(username);
      })(done);
    });
  });
});
