Package.describe({
  summary: 'Crawler Main Package',
  version: '1.0.0',
  name: 'crawler'
});

Package.onUse(function (api) {  
  api.addFiles('custom.css', 'client');
  api.addFiles('custom_view.js', 'client');
  api.addFiles('templates/user_posts.js', 'client');
  api.addFiles('templates/user_posts.html', 'client');
});
