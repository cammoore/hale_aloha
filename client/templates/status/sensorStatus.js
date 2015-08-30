Template.sensorStatus.helpers({
  currentStatus: function (towerId) {
    var statuses = Status.find({tower: towerId}).fetch();
    //console.log(statuses);
    var i;
    for (i = 0; i < 10; i++) {
      var id = "" + statuses[i].sensorId;
      //console.log(id);
      var element = $(id);
      if (typeof element != "undefined") {
        element.addClass(statuses[i].status);
      }
      //console.log(element);
    }
  }
});

Template.sensorStatus.events({
  //add your events here
});

Template.sensorStatus.onCreated(function () {
  //add your statement here
});

Template.sensorStatus.onRendered(function () {
  var towerId = this.data.tower;
  var statuses = Status.find({tower: towerId}).fetch();
  //console.log(statuses);
  var i;
  for (i = 0; i < 10; i++) {
    var id = "#" + statuses[i].sensorId;
    //console.log(id);
    var element = $(id);
    //console.log(element);
    element.addClass(statuses[i].status);
  }
});

Template.sensorStatus.onDestroyed(function () {
  //add your statement here
});

