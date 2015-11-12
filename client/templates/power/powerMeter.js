/**
 * This file is a part of hale_aloha_dashboard.
 *
 * Created by Cam Moore on 11/12/15.
 *
 * Copyright (C) 2015 Cam Moore.
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy , modify, merge, publish, deistribute, sublicense, and/or sell
 * copies of the Software, and to permit person to whom the Software is
 * furnished to do so, subject to the following condtions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHOERS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETER IN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISIGN FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE
 */
powerMetersReady = false;

Template.powerMeter.helpers({
  initPowerUpdate: function (towerId, element) {
    var current = Power.find({"tower": towerId}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    //console.log("initPowerUpdate");
    var cur = parseFloat(Math.round(current[0].value / 10) / 100).toFixed(2);
    var min = parseFloat(Math.round(current[0].minimum / 10) / 100).toFixed(2);
    var max = parseFloat(Math.round(current[0].maximum / 10) / 100).toFixed(2);
    if (cur < min) {
      min = cur * 0.8;
    }
    if (cur > max) {
      max = cur * 1.2;
    }
    if (towerId === "ilima") {
      if (document.getElementById("gaugeilima")) {
        $("#gaugeilima").empty();
        new JustGage({
          id: "gaugeilima",
          value: cur,
          min: min,
          max: max,
          title: "Current Power (kW)",
          refreshAnimationTime: 1
        });
      }
    }
    else if (towerId === "lehua") {
      if (typeof glehua != "undefined") {
        if (document.getElementById("gaugelehua")) {
          $("#gaugelehua").empty();
          new JustGage({
            id: "gaugelehua",
            value: cur,
            min: min,
            max: max,
            title: "Current Power (kW)",
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
          new JustGage({
            id: "gaugelokelani",
            value: cur,
            min: min,
            max: max,
            title: "Current Power (kW)",
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
          new JustGage({
            id: "gaugemokihana",
            value: cur,
            min: min,
            max: max,
            title: "Current Power (kW)",
            refreshAnimationTime: 1
          });
        }
      }
    }
  },
  minPowerValue: function (towerId) {
    var current = Power.find({"tower": towerId}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    var cur = parseFloat(Math.round(current[0].value / 10) / 100).toFixed(2);
    var min = parseFloat(Math.round(current[0].minimum / 10) / 100).toFixed(2);
    if (min < cur) {
      return min;
    }
    else {
      return parseFloat(cur - (.100 * cur)).toFixed(2);
    }
  },
  maxPowerValue: function (towerId) {
    var current = Power.find({"tower": towerId}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    var cur = parseFloat(Math.round(current[0].value / 10) / 100).toFixed(2);
    var max = parseFloat(Math.round(current[0].maximum / 10) / 100).toFixed(2);
    if (max > cur) {
      return max;
    }
    else {
      return parseFloat(cur + (0.1 * cur)).toFixed(2);
    }
  },
  avePowerValue: function (towerId) {
    var current = Power.find({"tower": towerId}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    //console.log(current);
    return parseFloat(Math.round(current[0].average / 10) / 100).toFixed(2);
  },
  asOf: function (towerId) {
    var current = Power.find({"tower": towerId}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    return moment(current[0].timestamp).format("MM/DD/YY hh:mm:ss a");
  },
  meters: function (towerId) {
    var current = Power.find({"tower": towerId}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    return current[0].meters;
  },
  reporting: function (towerId) {
    var current = Power.find({"tower": towerId}, {
      sort: {createdAt: -1},
      limit: 1
    }).fetch();
    var numReporting = current[0].reporting
    var id = "#" + towerId + "reporting"
    var elem = $(id);
    if (numReporting == 10) {
      elem.addClass("text-success");
    }
    else if (numReporting > 7) {
      elem.addClass("text-warning");
    }
    else {
      elem.addClass("text-danger");
    }
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
  //console.log("onRendered");
  var tower = this.data.tower;
  var current = Power.find({"tower": tower}, {
    sort: {createdAt: -1},
    limit: 1
  }).fetch();
  var numReporting = current[0].reporting;
  var cur = parseFloat(Math.round(current[0].value / 10) / 100).toFixed(2);
  var min = parseFloat(Math.round(current[0].minimum / 10) / 100).toFixed(2);
  var max = parseFloat(Math.round(current[0].maximum / 10) / 100).toFixed(2);
  if (cur < min) {
    min = cur * 0.8;
  }
  if (cur > max) {
    max = cur * 1.2;
  }
  //console.log("reporting = " + numReporting);
  if (tower === "ilima") {
    new JustGage({
      id: "gaugeilima",
      value: cur,
      min: min,
      max: max,
      title: "Current Power (kW)",
      refreshAnimationTime: 1
    });
    if (numReporting === 10) {
      $("#ilimareporting").addClass("success");
    }
    else if (numReporting > 7) {
      $("#ilimareporting").addClass("warning");
    }
    else {
      $("#ilimareporting").addClass("danger");
    }
  }
  if (tower === "lehua") {
    new JustGage({
      id: "gaugelehua",
      value: cur,
      min: min,
      max: max,
      title: "Current Power (kW)",
      refreshAnimationTime: 1
    });
    if (numReporting === 10) {
      $("#lehuareporting").addClass("success");
    }
    else if (numReporting > 7) {
      $("#lehuareporting").addClass("warning");
    }
    else {
      $("#lehuareporting").addClass("danger");
    }
  }
  if (tower === "lokelani") {
    new JustGage({
      id: "gaugelokelani",
      value: cur,
      min: min,
      max: max,
      title: "Current Power (kW)",
      refreshAnimationTime: 1
    });
    if (numReporting === 10) {
      $("#lokelanireporting").addClass("success");
    }
    else if (numReporting > 7) {
      $("#lokelanireporting").addClass("warning");
    }
    else {
      $("#lokelanireporting").addClass("danger");
    }
  }
  if (tower === "mokihana") {
    new JustGage({
      id: "gaugemokihana",
      value: cur,
      min: min,
      max: max,
      title: "Current Power (kW)",
      refreshAnimationTime: 1
    });
    if (numReporting === 10) {
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
});

Template.powerMeter.onDestroyed(function () {
  //add your statement here
});

