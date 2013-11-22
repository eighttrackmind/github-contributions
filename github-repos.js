// Generated by CoffeeScript 1.6.3
var github, promise, request;

promise = require('when');

request = require('request');

github = function(user, clientId, clientSecret) {
  var deferred, fetch, process;
  deferred = promise.defer();
  fetch = function(page, total) {
    var data;
    if (page == null) {
      page = 1;
    }
    if (total == null) {
      total = 0;
    }
    data = {
      url: "https://api.github.com/users/" + user + "/repos",
      qs: {
        page: page,
        per_page: 100
      }
    };
    if (clientId && clientSecret) {
      data.qs.client_id = clientId;
      data.qs.client_secret = clientSecret;
    }
    return request(data, function(err, body, res) {
      res = JSON.parse(res);
      if (err || 'message' in res) {
        return deferred.reject(err || res);
      } else {
        return process(res, total, page);
      }
    });
  };
  process = function(res, total, page) {
    var count;
    count = res.length;
    if (count) {
      total += count;
      deferred.notify(total);
      return fetch(++page, total);
    } else {
      return deferred.resolve(total);
    }
  };
  fetch();
  return deferred.promise;
};

module.exports = github;
