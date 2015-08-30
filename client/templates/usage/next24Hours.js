Template.next24Hours.helpers({
  //add you helpers here
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
  var records = PredictedHourly.find({tower: towerId}).fetch();
  // parse in the data
  var data = [];
  data[0] = [];
  data[1] = [];
  data[2] = [];
  data[3] = [];
  data[4] = [];
  data[5] = [];
  data[6] = [];
  data[7] = [];
  data[8] = [];
  data[9] = [];
  data[10] = [];
  data[11] = [];
  data[12] = [];
  data[13] = [];
  data[14] = [];
  data[15] = [];
  data[16] = [];
  data[17] = [];
  data[18] = [];
  data[19] = [];
  data[20] = [];
  data[21] = [];
  data[22] = [];
  data[23] = [];

  data[0][0] = records[0].label;
  data[1][0] = records[1].label;
  data[2][0] = records[2].label;
  data[3][0] = records[3].label;
  data[4][0] = records[4].label;
  data[5][0] = records[5].label;
  data[6][0] = records[6].label;
  data[7][0] = records[7].label;
  data[8][0] = records[8].label;
  data[9][0] = records[9].label;
  data[10][0] = records[10].label;
  data[11][0] = records[11].label;
  data[12][0] = records[12].label;
  data[13][0] = records[13].label;
  data[14][0] = records[14].label;
  data[15][0] = records[15].label;
  data[16][0] = records[16].label;
  data[17][0] = records[17].label;
  data[18][0] = records[18].label;
  data[19][0] = records[19].label;
  data[20][0] = records[20].label;
  data[21][0] = records[21].label;
  data[22][0] = records[22].label;
  data[23][0] = records[23].label;

  data[0][1] = records[0].values;
  data[1][1] = records[1].values;
  data[2][1] = records[2].values;
  data[3][1] = records[3].values;
  data[4][1] = records[4].values;
  data[5][1] = records[5].values;
  data[6][1] = records[6].values;
  data[7][1] = records[7].values;
  data[8][1] = records[8].values;
  data[9][1] = records[9].values;
  data[10][1] = records[10].values;
  data[11][1] = records[11].values;
  data[12][1] = records[12].values;
  data[13][1] = records[13].values;
  data[14][1] = records[14].values;
  data[15][1] = records[15].values;
  data[16][1] = records[16].values;
  data[17][1] = records[17].values;
  data[18][1] = records[18].values;
  data[19][1] = records[19].values;
  data[20][1] = records[20].values;
  data[21][1] = records[21].values;
  data[22][1] = records[22].values;
  data[23][1] = records[23].values;

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


  var title = towerId + " expected energy usage";
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
