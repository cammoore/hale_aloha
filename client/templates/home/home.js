Template.home.helpers({
  loggedIn: function() {
    var user = Meteor.user();
    if (user) {
      return true;
    }
    return false;
  },
  goToPower: function() {
    Router.go('/power');
    window.location.reload();
  }
});

Template.home.events({
  //add your events here
});

Template.home.onCreated(function () {
  //add your statement here
});

Template.home.onRendered(function () {
  //add your statement here
});

Template.home.onDestroyed(function () {
  //add your statement here
});

