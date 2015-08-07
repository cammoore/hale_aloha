//google.load("visualization", "1", {packages:['corechart', 'imagechart']});

Template.powerMeter.helpers({
  //add you helpers here
  currentPowerValue: function (towerId, element) {
    var current = Power.find({"tower": towerId, "lounge": {$exists: false}}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    var cur = Math.floor(current[0].value);
    console.log("current power = " + cur);
    if (towerId === "ilima") {
      if (typeof gilima != "undefined") {
        console.log(typeof gilima);
        gilima.refresh(cur);
      }
    }
    else if (towerId === "lehua") {
      if (typeof glehua != "undefined") {
        glehua.refresh(cur);
      }
    }
    else if (towerId === "lokelani") {
      if (typeof glokelani != "undefined") {
        glokelani.refresh(cur);
      }
    }
    else if (towerId === "mokihana") {
      if (typeof gmokihana != "undefined") {
        gmokihana.refresh(cur);
      }
    }
    return cur;
  },
  minPowerValue: function (towerId) {
    var current = Power.find({"tower": towerId, "lounge": {$exists: false}}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    var min = current[0].minimum;
    var cur = current[0].value;
    if (min < cur) {
      return Math.floor(min);
    }
    else {
      return Math.floor(cur - (.100 * cur));
    }
  },
  maxPowerValue: function (towerId) {
    var current = Power.find({"tower": towerId, "lounge": {$exists: false}}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    var max = current[0].maximum;
    var cur = current[0].value;
    if (max > cur) {
      return Math.floor(max);
    }
    else {
      return Math.floor(cur + (0.1 * cur));
    }
  },
  avePowerValue: function (towerId) {
    var current = Power.find({"tower": towerId, "lounge": {$exists: false}}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    //console.log(current);
    return Math.floor(current[0].average);
  },
  asOf: function (towerId) {
    var current = Power.find({"tower": towerId, "lounge": {$exists: false}}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    return moment(current[0].timestamp).format();
  },
  meters: function (towerId) {
    var current = Power.find({"tower": towerId, "lounge": {$exists: false}}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    return current[0].meters;
  },
  reporting: function (towerId) {
    var current = Power.find({"tower": towerId, "lounge": {$exists: false}}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    return current[0].reporting;
  }
});

Template.powerMeter.events({
  //add your events here
});

Template.powerMeter.onCreated(function () {
  //add your statement here
});

Template.powerMeter.onRendered(function () {
    var tower = this.data.tower;
    console.log("rendered " + tower);
//add your statement here
//var current = Power.find({"tower": towerId, "lounge": {$exists: false}}, {sort: {createdAt: -1}, limit: 1}).fetch();
//var powerTable = new google.visualization.DataTable();
//var numPowerTableRows = 1;
//powerTable.addColumn('date'); // the time of day.
//powerTable.addColumn('number'); // the power in Wh.
//powerTable.addColumn('number'); // the baseline power in Wh.
//powerTable.addRows(numPowerTableRows);
//var timestampVal = current[0].createdAt;
//var powerVal = Math.floor(current[0].value);
})
;

Template.powerMeter.onDestroyed(function () {
  //add your statement here
});

