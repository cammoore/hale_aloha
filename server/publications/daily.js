/**
 * Created by Carleton on 7/31/2015.
 */
Meteor.publish("daily", function() {
    return Daily.find();
})