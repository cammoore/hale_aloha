Template.power.helpers({
  //add you helpers here
  currentPower: function(towerId) {
    var current = Power.find({"tower": towerId, "lounge": {$exists: false}}, {sort: {createdAt: -1}, limit: 1}).fetch();
    //console.log(current);
    return current[0].value;
  }
});

Template.power.events({
  //add your events here
});

Template.power.onCreated(function () {
  //add your statement here
});

Template.power.onRendered(function () {
  //add your statement here
});

Template.power.onDestroyed(function () {
  //add your statement here
});

