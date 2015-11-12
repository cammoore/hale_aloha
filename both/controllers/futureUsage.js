FutureUsageController = AppController.extend({
  waitOn: function () {
    return ([this.subscribe("predictedDaily"),
      this.subscribe("predictedHourly")]);
  },
  data: {},
  onAfterAction: function () {
    Meta.setTitle('Future Energy');
  }
});

FutureUsageController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
