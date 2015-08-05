PowerController = AppController.extend({
  waitOn: function() {
    return this.subscribe('power');
  },
  data: {
    power: Power.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Power');
  }});

PowerController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
