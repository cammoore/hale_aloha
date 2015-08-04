/**
 * Created by carletonmoore on 8/3/15.
 */
Meteor.publish("power", function() {
  return Power.find();
})