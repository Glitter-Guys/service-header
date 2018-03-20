const promise = require('bluebird');
const initOptions = {
    promiseLib: promise,
    capSQL: true,
};
const pgp = require('pg-promise')(initOptions);
const insert = require('./pgBulkInsert.js');

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'sdc',
  user: 'dmp',
};

const db = pgp(cn);

insert.doMassiveInsert(db, 'groups', insert.groupsColumnList, insert.generateFakeGroupsRow, 1000)
  .then(data => {
    insert.doMassiveInsert(db, 'events', insert.eventsColumnList, insert.generateFakeEventsRow, 10000)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

