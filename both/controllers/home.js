HomeController = AppController.extend({
  waitOn: function() {
    return this.subscribe('daily');
  },
  data: {
    daily: Daily.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Hale Aloha');
  }
});

HomeController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
