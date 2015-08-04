/**
 * Created by carletonmoore on 8/3/15.
 */
Power = new Mongo.Collection('power');

Power.helpers({

});

Power.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
