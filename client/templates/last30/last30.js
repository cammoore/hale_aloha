Template.last30.helpers({
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

Template.last30.events({
    //add your events here
});

Template.last30.onCreated(function () {
    //add your statement here
});

Template.last30.onRendered(function () {
    var w = 600;
    var h = 250;

    //add your statement here
    var towerId = this.data.towerId;
    console.log(towerId);
    var records = Daily.find({"tower": towerId, "lounge": {$exists: false}}, {fields: {value: 1}}).fetch();
    console.log(records);
    var width = document.getElementById(towerId).clientWidth - 20;
    var height = document.getElementById(towerId + "last30_chart").clientHeight;
    //var w = width;
    //var h = height;
    console.log("height = " + height);
    console.log("width = " + width);
    if (height === 0) {
        height = h;
    }
    var xScale = d3.scale.ordinal()
        .rangeRoundBands([0, width], 0.05);
    var yScale = d3.scale.linear()
        .range([0, height]);
    //Define key function, to be used when binding data
    var key = function (d) {
        return d._id;
    };
    var svg = d3.select("#" + towerId + "Last30Chart")
        .attr("width", width)
        .attr("height", height);
    Deps.autorun(function () {
        var modifier = {fields: {value: 1}};
        var sortModifier = Session.get('barChartSortModifier');
        if (sortModifier && sortModifier.sort)
            modifier.sort = sortModifier.sort;
        var dataset = records;
        //Update scale domains
        xScale.domain(d3.range(dataset.length));
        yScale.domain([0, d3.max(dataset, function (d) {
            return d.value;
        })]);

        //Select…
        var bars = svg.selectAll("rect")
            .data(dataset, key);

        //Enter…
        bars.enter()
            .append("rect")
            .attr("x", width)
            .attr("y", function (d) {
                return height - yScale(d.value);
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function (d) {
                return yScale(d.value);
            })
            .attr("fill", function (d) {
                return "rgb(0, 0, " + (d.value * 10) + ")";
            })
            .attr("data-id", function (d) {
                return d._id;
            });

        //Update…
        bars.transition()
            // .delay(function(d, i) {
            // 	return i / dataset.length * 1000;
            // }) // this delay will make transistions sequential instead of paralle
            .duration(500)
            .attr("x", function (d, i) {
                return xScale(i);
            })
            .attr("y", function (d) {
                return h - yScale(d.value);
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function (d) {
                return yScale(d.value);
            }).attr("fill", function (d) {
                return "rgb(0, 0, " + (d.value * 10) + ")";
            });

        //Exit…
        bars.exit()
            .transition()
            .duration(500)
            .attr("x", -xScale.rangeBand())
            .remove();


        //Update all labels

        //Select…
        var labels = svg.selectAll("text")
            .data(dataset, key);

        //Enter…
        labels.enter()
            .append("text")
            .text(function (d) {
                return Math.round(d.value);
            })
            .attr("text-anchor", "middle")
            .attr("x", w)
            .attr("y", function (d) {
                return h - yScale(d.value) + 14;
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "white");

        //Update…
        labels.transition()
            // .delay(function(d, i) {
            // 	return i / dataset.length * 1000;
            // }) // this delay will make transistions sequential instead of paralle
            .duration(500)
            .attr("x", function (d, i) {
                return xScale(i) + xScale.rangeBand() / 2;
            }).attr("y", function (d) {
                return h - yScale(d.value) + 14;
            }).text(function (d) {
                return d.value;
            });

        //Exit…
        labels.exit()
            .transition()
            .duration(500)
            .attr("x", -xScale.rangeBand())
            .remove();

    });

});

Template.last30.onDestroyed(function () {
    //add your statement here
});

