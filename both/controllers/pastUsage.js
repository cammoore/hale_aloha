PastUsageController = AppController.extend({
  waitOn: function() {
    return ([this.subscribe('daily'),
        this.subscribe('hourly')]);
  },
  data: {
  },
  onAfterAction: function () {
    Meta.setTitle('Past Energy');
  }
});

PastUsageController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
