const MongoClient = require('mongodb').MongoClient;
const { doBulkWrite } = require('./mongoBulkInsert.js');
const { generateFakeGroupsRow, generateFakeEventsRow } = require('../postgres/pgBulkInsert.js');


MongoClient.connect('mongodb://localhost:27017/sdc', (err, database) => {
  let db = database.db('sdc')
  let colGroups = db.collection('groups');
  let colEvents = db.collection('events');

  doBulkWrite(colGroups, 100, 0, 10000, generateFakeGroupsRow, 'gid', (err, msg) => {
    if (err) throw err;
    doBulkWrite(colEvents, 1000, 0, 10000, generateFakeEventsRow, 'eid', (err, msg) => {
      if (err) throw err;
      database.close();
    });
  });
});

