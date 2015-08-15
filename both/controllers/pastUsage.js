PastUsageController = AppController.extend({
  waitOn: function() {
    return this.subscribe('daily');
  },
  data: {
  },
  onAfterAction: function () {
    Meta.setTitle('Past Usage');
  }
});

PastUsageController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
