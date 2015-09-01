Mongo.Collection.prototype.methods = function(methods) {
  var self = this;

  _.each(methods, function(method, key) {
    self[key] = method;
  });
};