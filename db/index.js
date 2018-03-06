const schemas = require('./mongoSchema');
const mongoose = require('mongoose');

class DbHelper {
    constructor () {
        
        this.Event;
        this.Group;
        mongoose.connect('mongodb://localhost/meetup');
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.db.once('open', (function() {
            console.log('connected to database');
            this.Event = mongoose.model('Event', mongoose.Schema(schemas.eventSchema));
            this.Group = mongoose.model('Group', mongoose.Schema(schemas.groupSchema));
        }).bind(this))
    }
    
    retrieveEvent (eventID, cb) {
        this.Event.find({id: eventID}).lean().exec((function(err, events) {
            if (err) cb(err, null);
            var result = events[0];
            if (result === null) {
                cb('No Event Exists in DB', null);
                return;
            }
            this.Group.find({id:events[0].group}, function(err, groups) {
                if (err) cb(err, null);
                result.group = groups[0];
                cb(null, result)
            })
        }).bind(this))
    }


}

module.exports = DbHelper