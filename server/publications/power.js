/**
 * Created by carletonmoore on 8/3/15.
 */
Meteor.publish("power", function() {
  //console.log("publishing power");
  return Power.find();
});