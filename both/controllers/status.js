/**
 * Created by carletonmoore on 8/3/15.
 */
StatusController = AppController.extend({
  waitOn: function() {
    return this.subscribe('items');
  },
  data: {
    items: Items.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Sensor Status');
  }
});

StatusController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
