/**
 * Created by Carleton on 7/31/2015.
 */
Meteor.publish("monthly", function() {
    return Monthly.find();
})