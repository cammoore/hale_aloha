Router.route('home', {
  path: '/',
  controller: 'HomeController'
})

Router.route('power', {
  path: '/power',
  template: 'power',
  controller: 'PowerController'
});

Router.route('pastUsage', {
  path: '/pastUsage',
  controller: 'PastUsageController'
});

Router.route('futureUsage', {
  path: '/futureUsage',
  controller: 'FutureUsageController'
});

//Router.route('heatmap', {
//  path: '/heatmap',
//  controller: 'HeatMapController'
//})

Router.route('alerts', {
  path: '/alerts',
  controller: 'NotificationsController'
})

Router.route('/status', {
  name: 'status',
  controller: 'StatusController'
});

Router.plugin('ensureSignedIn', {
  only: ['power', 'pastUsage', 'futureUsage', 'alerts', 'status']
});
