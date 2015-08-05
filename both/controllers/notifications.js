NotificationsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('notifications');
  },
  data: {
    notifications: Notifications.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Notifications');
  }
});

NotificationsController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
