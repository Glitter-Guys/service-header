const MongoClient = require('mongodb').MongoClient;
const insert = require('../db/mongo/mongoBulkInsert.js');
const query = require('../db/mongo/dbQuery.js');
const { generateFakeGroupsRow, generateFakeEventsRow } = require('../db/postgres/pgBulkInsert.js');


describe('tests for MongoDB data model', () => {
  let dbCon;
  let db;
  let colGroups;
  let colEvents;

  beforeAll((done) => {
    MongoClient.connect('mongodb://localhost:27017/sdc', (err, database) => {
      dbCon = database;
      db = dbCon.db('sdc');
      colGroups = db.collection('groups_test');
      colEvents = db.collection('events');
      done();
    });
  });

  //beforeEach((done) => {
  //});

  afterAll((done) => {
    colGroups.remove({}, (err, r) => {
      dbCon.close();
      done();
    });
  });

  test('should create a batch of 10', () => {
    const { newBatch } = insert.createBatch(0, 10, generateFakeGroupsRow, 'gid');
    expect(newBatch.length).toBe(10);
    expect(newBatch[0].insertOne.document.gid).toBe(0);
    expect(typeof newBatch[0].insertOne.document.name).toBe('string');
  });

  test('should insert of 10k into groups_test collection', (done) => {
    const count = 1;
    const id = 0;
    const batchSize = 10000;
    const docFunc = generateFakeGroupsRow;
    const idField = 'gid'
    insert.doBulkWrite(colGroups, count, id, batchSize, docFunc, idField, (err, msg) => {
      colGroups.count({}, (err, count) => {
        expect(count).toBe(10000);
        done();
      });
    });
  });

  test('should convert array to object', () => {
    const obj = query.resultArrayToObject([ { group: [ {} ] } ]);
    expect(obj).toEqual({ group: {} });
  });

  test('should select event id 1 and have a nested group', (done) => {
    query.queryEvent(colEvents, 1, (err, data) => {
      if (err) throw(err);
      expect(data.eid).toBe(1);
      expect(typeof data.group.gid).toBe('number');
      done();
    });
  }, 10000);
});
