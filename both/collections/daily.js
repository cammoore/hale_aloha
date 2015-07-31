Daily = new Mongo.Collection('daily');

Daily.helpers({

});

Daily.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
});
