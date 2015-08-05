Router.route('power', {
  path: '/',
  controller: 'PowerController'
});

Router.route('usage', {
  path: '/usage',
  controller: 'UsageController'
});

Router.route('heatmap', {
  path: '/heatmap',
  controller: 'HeatMapController'
})

Router.route('notifications', {
  path: '/notifications',
  controller: 'NotificationsController'
})

Router.route('/status', {
  name: 'status',
  controller: 'StatusController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'power', 'status']
});
