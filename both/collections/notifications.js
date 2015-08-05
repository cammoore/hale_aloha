Notifications = new Mongo.Collection('notifications');

Notifications.helpers({

});

Notifications.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
