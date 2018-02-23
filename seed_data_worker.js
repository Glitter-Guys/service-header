var mongoose = require('mongoose');
var schemas = require('./db/mongoSchema.js');
var fs = require('fs');

mongoose.connect('mongodb://localhost/meetup');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to database');
    var Event = mongoose.model('Event', mongoose.Schema(schemas.eventSchema));
    var Group = mongoose.model('Group', mongoose.Schema(schemas.groupSchema));

    var data = fs.readFileSync('150UpcomingEvents.json', 'utf-8');
    var data = JSON.parse(data);
    for (var i = 0; i < data.length; i ++) {
        console.log('Count: ', i);

        var tempGroup = new Group(data[i].group);
        tempGroup.save();
        var editData = data[i];
        editData.group = data[i].group.id
        var tempEvent = new Event(editData);
        tempEvent.save()
    }

    setTimeout(function() {
        mongoose.disconnect(function(err) {
            if (err) return console.log(err);
            console.log('Database disconnected')
        });
    }, 10000)
});