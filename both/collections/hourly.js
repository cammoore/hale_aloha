/**
 * Created by Carleton on 7/31/2015.
 */
Hourly = new Mongo.Collection('hourly');

Hourly.helpers({

});

Hourly.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
});
