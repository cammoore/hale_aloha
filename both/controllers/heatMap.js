HeatMapController = AppController.extend({
  waitOn: function() {
    return this.subscribe('daily');
  },
  data: {
    daily: Daily.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Heat Map');
  }
});

HeatMapController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
