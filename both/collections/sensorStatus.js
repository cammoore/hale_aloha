/**
 * Created by carletonmoore on 8/3/15.
 */
Status = new Mongo.Collection('status');

Status.helpers({

});

Status.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
