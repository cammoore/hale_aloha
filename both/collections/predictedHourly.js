/**
 * Created by carletonmoore on 8/28/15.
 */
PredictedHourly = new Mongo.Collection('predictedHourly');

PredictedHourly.helpers({

});

PredictedHourly.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
