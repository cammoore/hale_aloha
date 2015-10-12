Template.next24Hours.helpers({
  capitalize: function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});

Template.next24Hours.events({
  //add your events here
});

Template.next24Hours.onCreated(function () {
  //add your statement here
});

Template.next24Hours.onRendered(function () {
  var towerId = this.data.tower;
  predictNext24HoursEnergy(towerId);
});

Template.next24Hours.onDestroyed(function () {
  //add your statement here
});

function predictNext24HoursEnergy(towerId) {
  var labels = true; // show the text labels beside individual boxplots?

  var margin = {top: 30, right: 50, bottom: 70, left: 50};
  var container = document.getElementById(towerId + 'Next24_chart');
  var idString = "#" + towerId + "Next24_chart";
  var shortIdString = "#" + towerId;
  var width = $(shortIdString).width() - margin.left - margin.right;
  var height = 400 - margin.top - margin.bottom;


  var min = Infinity,
    max = -Infinity;
  var records = PredictedHourly.find({tower: towerId}, {sort: {createdAt: 1}}).fetch();
  var numRecords = records.length - 1;

  // parse in the data
  var data = [];
  var i = 0;
  for (i = 0; i < 24; i++) {
    //console.log("i = " + i);
    data[i] = [];
    var record = records[numRecords - 24 + i];
    //console.log(numRecords - 7 + i);
    //console.log(record);
    data[i][0] = record.label;
    data[i][1] = record.values;
  }

  // need to find min and max for the data.
  var i = 0;
  var j = 0;
  for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i][1].length; j++) {
      if (max < data[i][1][j]) {
        max = data[i][1][j];
      }
      if (min > data[i][1][j]) {
        min = data[i][1][j];
      }
    }
  }

  //console.log("max= " + max + " min= " + min);
  var chart = d3.box()
    .whiskers(iqr(1.5))
    .height(height)
    .domain([min, max])
    .showLabels(labels);

  var svg = d3.select(idString).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class", "box")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // the x-axis
  var x = d3.scale.ordinal()
    .domain(data.map(function (d) {
      return d[0]
    }))
    .rangeRoundBands([0, width], 0.7, 0.3);

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  // the y-axis
  var y = d3.scale.linear()
    .domain([min, max])
    .range([height + margin.top, 0 + margin.top]);

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  // draw the boxplots
  svg.selectAll(".box")
    .data(data)
    .enter().append("g")
    .attr("transform", function (d) {
      return "translate(" + x(d[0]) + "," + margin.top + ")";
    })
    .call(chart.width(x.rangeBand()));


  var title = capitalize(towerId) + " expected energy usage";
  // add a title
  svg.append("text")
    .attr("x", (width / 2))
    .attr("y", 0 + (margin.top / 2))
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    //.style("text-decoration", "underline")
    .text(title);

  // draw y axis
  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text") // and text1
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .style("font-size", "16px")
    .text("Energy in kW");

  // draw x axis
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (height + margin.top + 10) + ")")
    .call(xAxis)
    .append("text")             // text label for the x axis
    .attr("x", (width / 2))
    .attr("y", 17)
    .attr("dy", ".71em")
    .style("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Hour");

}

// Returns a function to compute the interquartile range.
function iqr(k) {
  return function (d, i) {
    var q1 = d.quartiles[0],
      q3 = d.quartiles[2],
      iqr = (q3 - q1) * k,
      i = -1,
      j = d.length;
    while (d[++i] < q1 - iqr);
    while (d[--j] > q3 + iqr);
    return [i, j];
  };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}