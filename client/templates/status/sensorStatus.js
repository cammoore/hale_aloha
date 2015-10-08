Template.sensorStatus.helpers({
  currentStatus: function (towerId) {
    var statuses = Status.find({tower: towerId}, {sort: {date: -1}}).fetch();
    //console.log(statuses);
    updateStatus(statuses);
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
  //console.log("onRendered " + towerId);
  var statuses = Status.find({tower: towerId}, {sort: {date: -1}}).fetch();
  updateStatus(statuses);
});

Template.sensorStatus.onDestroyed(function () {
  //add your statement here
});

function updateStatus(statuses) {
  var i;
  for (i = 0; i < 10; i++) {
    var id = "#" + statuses[i].sensorId;
    var element = $(id);
    element.addClass(statuses[i].status);
  }
}