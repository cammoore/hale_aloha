Template.next7Days.helpers({
  //add you helpers here
});

Template.next7Days.events({
  //add your events here
});

Template.next7Days.onCreated(function () {
  //add your statement here
});

Template.next7Days.onRendered(function () {
  var towerId = this.data.tower;
  predictNext7DaysEnergy(towerId);
});

Template.next7Days.onDestroyed(function () {
  //add your statement here
});

function predictNext7DaysEnergy(towerId) {
  var labels = true; // show the text labels beside individual boxplots?

  var margin = {top: 30, right: 50, bottom: 70, left: 50};
  var container = document.getElementById(towerId + 'Next7_chart');
  var idString = "#" + towerId + "Next7_chart";
  var shortIdString = "#" + towerId;
  var width = $(shortIdString).width() - margin.left - margin.right;
  //console.log("width = " + width);

  var height = 400 - margin.top - margin.bottom;


  var min = Infinity,
      max = -Infinity;
  //console.log(document.querySelector(idString));
  //console.log(d3.select(idString));
  //console.log(towerId);
  var records = PredictedHourly.find({tower: towerId}).fetch();
  //console.log(records[0].values);
  // parse in the data
  var data = [];

  // using an array of arrays with
  // data[n][2]
  // where n = number of columns in the csv file
  // data[i][0] = name of the ith column
  // data[i][1] = array of values of ith column

  //console.log("csv");
  //console.log(csv);
  data[0] = [];
  //data[1] = [];
  // add more rows if your csv file has more columns

  // add here the header of the csv file
  data[0][0] = records[0].createdAt;
  //data[1][0] = "foo";
  // add more rows if your csv file has more columns

  data[0][1] = records[0].values;
  //data[1][1] = records[0].values;


  //console.log(data);

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
        //console.log(d);
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

  //console.log(data);
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
      .attr("y", 10)
      .attr("dy", ".71em")
      .style("text-anchor", "middle")
      .style("font-size", "16px")
      .text("Day");

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
