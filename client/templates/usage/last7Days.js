Template.last7Days.helpers({
  byTower: function (towerId) {
    //console.log("byTower " + towerId);
    var records = Daily.find({"tower": towerId}, {sort: {date: -1}}).fetch();
    updateBarChart(records, towerId);

  },
  parentHelper: function (parentContext) {
    console.log(this); // profile.name data context
    console.log(parentContext); // profile data context
  }
});

Template.last7Days.events({
  //add your events here
});

Template.last7Days.onCreated(function () {
  //add your statement here
});

Template.last7Days.onRendered(function () {
  //console.log("onRendered");
  var towerId = this.data.towerId;
  var records = Daily.find({"tower": towerId}, {sort: {date: -1}}).fetch();
  //console.log(records[0]);
  updateBarChart(records, towerId);
});

Template.last7Days.onDestroyed(function () {
  //add your statement here
});

function updateBarChart(records, towerId) {
  var container = document.getElementById(towerId + 'Last7DaysChart');
  if (container !== null) {
    var barWidth = document.getElementById(towerId).clientWidth / 12;
    var items = [];
    var i;
    var limit = records.length;
    if (limit > 7) {
      limit = 7;
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
            text: "KiloWatts"
          }
        }
      },
      orientation: 'top'
    };
    new vis.Graph2d(container, items, options);
  }
}