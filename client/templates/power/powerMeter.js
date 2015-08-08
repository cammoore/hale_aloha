//google.load("visualization", "1", {packages:['corechart', 'imagechart']});

Template.powerMeter.helpers({
  //add you helpers here
  currentPowerValue: function (towerId, element) {
    var current = Power.find({"tower": towerId, "lounge": {$exists: false}}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    var cur = Math.floor(current[0].value);
    var min = Math.floor(current[0].minimum);
    var max = Math.floor(current[0].maximum);
    if (towerId === "ilima") {
      if (typeof gilima != "undefined") {
        if (document.getElementById("gaugeilima")) {
          $("#gaugeilima").empty();
          //gilima.refresh(cur);
          gilima = new JustGage({
            id: "gaugeilima",
            value: cur,
            min: min,
            max: max,
            title: "Current Power (W)",
            refreshAnimationTime: 1
          });
        }
      }
    }
    else if (towerId === "lehua") {
      if (typeof glehua != "undefined") {
        if (document.getElementById("gaugelehua")) {
          //        glehua.refresh(cur);
          $("#gaugelehua").empty();
          glehua = new JustGage({
            id: "gaugelehua",
            value: cur,
            min: min,
            max: max,
            title: "Current Power (W)",
            refreshAnimationTime: 1
          });
        }
      }
    }
    else if (towerId === "lokelani") {
      if (typeof glokelani != "undefined") {
        if (document.getElementById("gaugelokelani")) {
          //glokelani.refresh(cur);
          $("#gaugelokelani").empty();
          glehua = new JustGage({
            id: "gaugelokelani",
            value: cur,
            min: min,
            max: max,
            title: "Current Power (W)",
            refreshAnimationTime: 1
          });
        }
      }
    }
    else if (towerId === "mokihana") {
      if (typeof gmokihana != "undefined") {
        if (document.getElementById("gaugemokihana")) {

//        gmokihana.refresh(cur);
          $("#gaugemokihana").empty();
          glehua = new JustGage({
            id: "gaugemokihana",
            value: cur,
            min: min,
            max: max,
            title: "Current Power (W)",
            refreshAnimationTime: 1
          });
        }
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
    return moment(current[0].timestamp).format("MM/DD/YY hh:mm:ss a");
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
    var numReporting = current[0].reporting
    var id = "#" + towerId + "reporting"
    var elem = $(id);
    //console.log(elem);
    if (numReporting == 10) {
      elem.addClass("text-success");
    }
    else if (numReporting > 7) {
      elem.addClass("text-warning");
    }
    else {
      elem.addClass("text-danger");
    }
    //elem.
    return numReporting;
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
  var current = Power.find({"tower": tower, "lounge": {$exists: false}}, {
    sort: {createdAt: -1},
    limit: 1
  }).fetch();
  var numReporting = current[0].reporting;
  //console.log("reporting = " + numReporting);
  if (tower === "ilima") {
    //console.log(numReporting == 10);
    if (numReporting === 10) {
      //console.log("good");
      $("#ilimareporting").addClass("success");
    }
    else if (numReporting > 7) {
      //console.log("ok");
      $("#ilimareporting").addClass("warning");
    }
    else {
      $("#ilimareporting").addClass("danger");
    }
  }
  if (tower === "lehua") {
    //console.log(numReporting == 10);
    if (numReporting === 10) {
      //console.log("good");
      $("#lehuareporting").addClass("success");
    }
    else if (numReporting > 7) {
      //console.log("ok");
      $("#lehuareporting").addClass("warning");
    }
    else {
      $("#lehuareporting").addClass("danger");
    }
  }
  if (tower === "lokelani") {
    //console.log(numReporting == 10);
    if (numReporting === 10) {
      //console.log("good");
      $("#lokelanireporting").addClass("success");
    }
    else if (numReporting > 7) {
      //console.log("ok");
      $("#lokelanireporting").addClass("warning");
    }
    else {
      $("#lokelanireporting").addClass("danger");
    }
  }
  if (tower === "mokihana") {
    //console.log(numReporting == 10);
    if (numReporting === 10) {
      //console.log("good");
      $("#mokihanareporting").addClass("success");
    }
    else if (numReporting > 7) {
      //console.log("ok");
      $("#mokihanareporting").addClass("warning");
    }
    else {
      $("#mokihanareporting").addClass("danger");
    }
  }
})
;

Template.powerMeter.onDestroyed(function () {
  //add your statement here
});

