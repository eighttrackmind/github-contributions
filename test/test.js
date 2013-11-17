// Generated by CoffeeScript 1.6.3
var get;

get = require('../github-contributions');

exports.github = {
  success: function(done) {
    var called, progress, success;
    called = {
      success: 0,
      progress: 0
    };
    success = function(count) {
      ++called.success;
      test.expect(called.success, 1);
      test.expect(called.progress, 1);
      return done();
    };
    progress = function(countSoFar) {
      return ++called.progress;
    };
    return get('demo').then(success, (function() {}), progress);
  },
  error: function(done) {
    var called, err;
    called = 0;
    err = function(err) {
      ++called;
      test.expect(called, 1);
      return done();
    };
    return get('ajkldanjkndjklfndjfnjkdsnfjrnfjkdndjkvnifsdvnfjkvnsrifrifnsermnerjifnerjfnjr').then((function() {}), err, (function() {}));
  }
};
