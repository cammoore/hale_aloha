/**
 * Created by Carleton on 7/31/2015.
 */
Meteor.publish("hourly", function() {
    return Hourly.find();
})