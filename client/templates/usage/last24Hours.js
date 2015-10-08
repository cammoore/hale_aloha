/**
 * Created by carletonmoore on 8/3/15.
 */
Template.last24Hours.helpers({
  /**
   * Reactive function to update the bar chart.
   * @param towerId The tower to update.
   */
  byTower: function (towerId) {
    //console.log("byTowerId " + towerId);
    var records = Hourly.find({"tower": towerId}, {sort: {date: -1}}).fetch();
    updateBarChart(records, towerId);
  },
  parentHelper: function (parentContext) {
    console.log(this); // profile.name data context
    console.log(parentContext); // profile data context
  }
});

Template.last24Hours.events({
  //add your events here
});

Template.last24Hours.onCreated(function () {
  //add your statement here
});

Template.last24Hours.onRendered(function () {
  //console.log("last24.onRendered");
  var towerId = this.data.towerId;
  //console.log(towerId);
  var records = Hourly.find({"tower": towerId, "lounge": {$exists: false}}, {sort: {date: -1}}).fetch();
  //console.log(records);
  updateBarChart(records, towerId);
});

Template.last24Hours.onDestroyed(function () {
  //add your statement here
});

function updateBarChart(records, towerId) {
  var container = document.getElementById(towerId + 'Last24HoursChart');
  if (container !== null) {
    //console.log(container);
    var barWidth = document.getElementById(towerId).clientWidth / 12;
    var items = [];
    var i;
    var limit = records.length;
    //console.log(limit);
    if (limit > 24) {
      limit = 24;
    }
    //console.log(limit);
    for (i = 0; i < limit; i++) {
      var item = {};
      item.x = records[i].date;
      item.y = records[i].value;
      items.push(item);
    }
    //console.log(items);
    var dataset = new vis.DataSet(items);
    var options = {
      style: 'bar',
      barChart: {width: Math.floor(barWidth), align: 'center'}, // align: left, center, right
      drawPoints: false,
      dataAxis: {
        icons: true,
        range: {
          max: 22000,
          min: 0
        },
        format: function (value) {
          var reduced = value / 1000;
          return reduced + " kW";
        },
        left: {
          format: function (value) {
            var reduced = value / 1000;
            return reduced + " kW";
          },
          range: {
            max: 22000,
            min: 0
          },
        },
        right: {
          format: function (value) {
            var reduced = value / 1000;
            return reduced + " kW";
          },
          range: {
            max: 22000,
            min: 0
          },
        }
      },
      orientation: 'top'
    };
    new vis.Graph2d(container, items, options);
  }
}