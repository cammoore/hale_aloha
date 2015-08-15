Template.last30Days.helpers({
  //add you helpers here
  byTower: function (towerId) {
    var records = Daily.find({"tower": towerId}).fetch();

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
  var records = Daily.find({"tower": towerId, "lounge": {$exists: false}}, {fields: {value: 1, date: 1}}).fetch();
  //console.log(records);

  var container = document.getElementById(towerId + 'Last30DaysChart');
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
      visible: true,
      showMajorLabels: true,
      showMinorLabels: false,
      range: {
        max: 22000,
        min: 0
      },
      format: function (value) {
        var reduced = value / 1000;
        return reduced;
      },
      left: {
        title: {
          text: "KiloWatts"
        },
        format: function (value) {
          var reduced = value / 1000;
          return reduced;
        },
        range: {
          max: 22000,
          min: 0
        },
      },
      right: {
        format: function (value) {
          var reduced = value / 1000;
          return reduced;
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


Template.last30Days.onDestroyed(function () {
  //add your statement here
});

