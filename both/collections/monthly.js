/**
 * Created by Carleton on 7/31/2015.
 */
Monthly = new Mongo.Collection('monthly');

Monthly.helpers({

});

Monthly.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
});
