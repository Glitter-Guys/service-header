const fs = require('fs');
const path = require('path');
const promise = require('bluebird');
const initOptions = {
    promiseLib: promise,
    capSQL: true,
};
const pgp = require('pg-promise')(initOptions);
const insert = require('../db/pgBulkInsert.js');
const query = require('../db/dbQuery.js');
const testData = require('../db/testData.js');
const rootDir = path.dirname(__dirname);

describe('', () => {
  let db;
  let createTestSchema;

  beforeAll(() => {
    const cn = {
      host: 'localhost',
      port: 5432,
      database: 'sdc',
      user: 'dmp',
    };

    createTestSchema = fs.readFileSync(path.join(rootDir, './db/create_data_model_test.sql'), 'utf8');
    db = pgp(cn);
  });

  beforeEach((done) => {
    db.any(createTestSchema, [true])
      .then(data => {
        done();
      })
      .catch(error => {
        console.log(error);
      });
  });

  afterAll((done) => {
    db = undefined;
  });

  test('should generate fake group row', () => {
    const fakeGroupRow = insert.generateFakeGroupsRow();
    expect(Object.keys(fakeGroupRow).length).toBe(10);
    expect(typeof fakeGroupRow.name).toBe('string');
  });

  test('should generate fake event row', () => {
    const fakeEventRow = insert.generateFakeEventsRow();
    expect(Object.keys(fakeEventRow).length).toBe(12);
    expect(typeof fakeEventRow.name).toBe('string');
  });

  test('getNextData promise should resolve to an array of length 10', () => {
    const promise = insert.getNextData(null, 1, insert.generateFakeGroupsRow, 10);
    expect(promise).resolves.toHaveLength(10);
  });

  test('should insert of 10k into table', (done) => {
    insert.doMassiveInsert(db, 'groups_test', insert.groupsColumnList, insert.generateFakeGroupsRow, 10)
      .then(data => {
        db.one('select count(*) as count from groups_test;', [true])
          .then(data => {
            expect(data.count).toBe('10000');
            done();
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  });

  test('should output correct sql', () => {
    const selectId1 = query.selectToJson(1);
    expect(selectId1.indexOf('1') !== -1).toBe(true);
  });

  test('should select event id 1', (done) => {
    const selectId1 = query.selectToJson(1);
    db.one(selectId1, [true])
      .then(data => {
        expect(data.result.id).toBe(1);
        done();
      })
      .catch(error => {
        console.log(error);
      });
  });
});
