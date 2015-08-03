Template.last12.helpers({
  //add you helpers here
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

Template.last12.events({
  //add your events here
});

Template.last12.onCreated(function () {
  //add your statement here
});

Template.last12.onRendered(function () {
  //add your statement here
  var towerId = this.data.towerId;
  //console.log(towerId);
  var records = Monthly.find({"tower": towerId, "lounge": {$exists: false}}, {fields: {value: 1, date: 1}}).fetch();
  //console.log(records);
  var container = document.getElementById(towerId + 'Last12Chart');
  var barWidth = container.clientWidth / 12;
  var items = [];
  var i;
  for (i = 0; i < records.length; i++) {
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
    orientation: 'top',
    start: '2014-06-30'
  };
  var graph2d = new vis.Graph2d(container, items, options);

})
;

Template.last12.onDestroyed(function () {
  //add your statement here
});

