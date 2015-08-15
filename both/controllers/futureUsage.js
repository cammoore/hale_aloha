FutureUsageController = AppController.extend({
  waitOn: function() {
    return this.subscribe('daily');
  },
  data: {
  },
  onAfterAction: function () {
    Meta.setTitle('Future Usage');
  }
});

FutureUsageController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
