HomeController = AppController.extend({
  onAfterAction: function () {
    //console.log("home.onAfterAction");
    Meta.setTitle('Welcome');
  }
});

HomeController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
