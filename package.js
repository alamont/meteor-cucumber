(function () {

  'use strict';

  Package.describe({
    name: 'xolvio:cucumber',
    summary: 'CucumberJS for Velocity',
    version: '0.3.0',
    git: 'git@github.com:xolvio/meteor-cucumber.git',
    debugOnly: true
  });

  Npm.depends({
    'cucumber': '0.4.7'
  });

  Package.onUse(function (api) {

    api.use([
      'underscore@1.0.2',
      'http@1.0.9',
      'velocity:core@0.4.5',
      'velocity:node-soft-mirror@0.2.5',
      'velocity:shim@0.0.3',
      'xolvio:webdriver@0.1.3'
    ], ['server', 'client']);
    api.use([
      'velocity:html-reporter@0.3.2'
    ], 'client');

    api.add_files([
      'sample-tests/feature.feature',
      'sample-tests/hooks.js',
      'sample-tests/steps.js',
      'sample-tests/world.js'
    ], 'server', {isAsset: true});

    api.addFiles(['server.js'], 'server');

    api.export('cucumber', 'server');
  });

})();