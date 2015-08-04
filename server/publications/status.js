/**
 * Created by carletonmoore on 8/3/15.
 */
Meteor.publish("status", function() {
  return Status.find();
})