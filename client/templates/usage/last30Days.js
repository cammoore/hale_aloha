Template.last30Days.helpers({
  //add you helpers here
  byTower: function (towerId) {
    var records = Daily.find({"tower": towerId}, {fields: {value: 1, date: 1}, sort: {date: -1}}).fetch();
    //console.log(records);
    updateBarChart(records, towerId);
  },
  parentHelper: function (parentContext) {
    console.log(this); // profile.name data context
    console.log(parentContext); // profile data context
  }
});

Template.last30Days.events({
  //add your events here
});

Template.last30Days.onCreated(function () {
  //add your statement here
});

Template.last30Days.onRendered(function () {
  var towerId = this.data.towerId;
  //console.log(towerId);
  var records = Daily.find({"tower": towerId}, {fields: {value: 1, date: 1}, sort: {date: -1}}).fetch();
  //console.log(records);
  updateBarChart(records, towerId);
});


Template.last30Days.onDestroyed(function () {
  //add your statement here
});

function updateBarChart(records, towerId) {
  var container = document.getElementById(towerId + 'Last30DaysChart');
  if (container !== null) {
    var barWidth = document.getElementById(towerId).clientWidth / 12;
    var items = [];
    var i;
    var limit = records.length;
    if (limit > 30) {
      limit = 30;
    }
    for (i = 0; i < limit; i++) {
      var item = {};
      item.x = records[i].date;
      item.y = records[i].value / 1000;
      items.push(item);
    }
    //console.log(items);
    var dataset = new vis.DataSet(items);
    var options = {
      style: 'bar',
      barChart: {width: Math.floor(barWidth), align: 'center'}, // align: left, center, right
      drawPoints: false,
      dataAxis: {
        icons: false,
        visible: true,
        showMajorLabels: true,
        showMinorLabels: false,
        left: {
          title: {
            text: "kWh"
          }
        }
      },
      orientation: 'top'
    };
    new vis.Graph2d(container, items, options);
  }
}
