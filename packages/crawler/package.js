Package.describe({
  summary: 'Crawler Main Package',
  version: '1.0.0',
  name: 'crawler'
});



Package.onUse(function (api) {  
  api.addFiles('custom.css', 'client');
});
