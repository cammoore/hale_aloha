/**
 * Created by carletonmoore on 8/28/15.
 */
PredictedDaily = new Mongo.Collection('predictedDaily');

PredictedDaily.helpers({

});

PredictedDaily.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
