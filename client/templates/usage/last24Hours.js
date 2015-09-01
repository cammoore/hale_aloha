/**
 * Created by carletonmoore on 8/3/15.
 */
Template.last24Hours.helpers({
  //add you helpers here
  byTower: function (towerId) {
    //console.log(towerId);
    var records = Hourly.find({"tower": towerId}, {sort: {createdAt: -1}}).fetch();
    //console.log(records);

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
  var records = Hourly.find({"tower": towerId, "lounge": {$exists: false}}, {sort: {createdAt: -1}}).fetch();
  //console.log(records);

  var container = document.getElementById(towerId + 'Last24HoursChart');
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

});

Template.last24Hours.onDestroyed(function () {
  //add your statement here
});

