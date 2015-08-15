Template.last7Days.helpers({
  byTower: function (towerId) {
    console.log(towerId);
    var records = Monthly.find({"tower": towerId}).fetch();
    console.log(records);

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
  var towerId = this.data.towerId;
  //console.log(towerId);
  var records = Daily.find({"tower": towerId, "lounge": {$exists: false}}, {fields: {value: 1, date: 1}}).fetch();
  //console.log(records);

  var container = document.getElementById(towerId + 'Last7DaysChart');
  var barWidth = document.getElementById(towerId).clientWidth / 12;
  var items = [];
  var i;
  var limit = records.length - 8;
  for (i = records.length -1; i > limit; i--) {
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

Template.last7Days.onDestroyed(function () {
  //add your statement here
});

