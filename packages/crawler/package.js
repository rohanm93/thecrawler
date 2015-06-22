Package.describe({
  summary: 'Crawler Find your spot',
  version: '1.0.0',
  name: 'crawler'
});

Package.onUse(function (api) {  
  api.use("telescope:core");
  api.use("templating")

  api.addFiles([
    'lib/client/routes.js',
    'lib/client/templates/findplace.js',
    'lib/client/templates/findplace.html'
  ], ['client']);

  api.addFiles('custom.css', 'client');

});