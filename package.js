Package.describe({
  name: 'patrickml:collection-methods',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Add Methods to your MeteorJS Collections',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/patrickml/collection-methods',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use([
    'underscore',
    'mongo']);
  api.addFiles('collection-methods.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('patrickml:collection-methods');
  api.addFiles('collection-methods-tests.js');
});
