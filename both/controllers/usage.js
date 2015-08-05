UsageController = AppController.extend({
  waitOn: function() {
    return this.subscribe('daily');
  },
  data: {
  },
  onAfterAction: function () {
    Meta.setTitle('Usage');
  }
});

UsageController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
