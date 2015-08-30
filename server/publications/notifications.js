/**
 * Created by carletonmoore on 8/17/15.
 */
Meteor.publish("notifications", function() {
  return Notifications.find();
})