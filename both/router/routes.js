Router.route('dashboard', {
  path: '/',
  controller: 'DashboardController'
});

Router.route('/status', {
  name: 'status',
  controller: 'StatusController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
