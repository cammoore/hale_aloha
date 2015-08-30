/**
 * Created by Carleton on 7/31/2015.
 */
Meteor.publish("predictedDaily", function() {
    return PredictedDaily.find();
})