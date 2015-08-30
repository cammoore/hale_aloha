/**
 * Created by Carleton on 7/31/2015.
 */
Meteor.publish("predictedHourly", function() {
    return PredictedHourly.find();
})