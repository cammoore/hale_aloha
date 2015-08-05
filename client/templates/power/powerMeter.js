Template.powerMeter.helpers({
  //add you helpers here
  currentPower: function(towerId) {
    var current = Power.find({"tower": towerId, "lounge": {$exists: false}}, {sort: {createdAt: -1}, limit: 1}).fetch();
    //console.log(current);
    return current[0].value;
  }
});

Template.powerMeter.events({
  //add your events here
});

Template.powerMeter.onCreated(function () {
  //add your statement here
});

Template.powerMeter.onRendered(function () {
  //add your statement here
});

Template.powerMeter.onDestroyed(function () {
  //add your statement here
});

