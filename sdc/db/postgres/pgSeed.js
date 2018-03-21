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

//insert.doMassiveInsert(db, 'groups', insert.groupsColumnList, insert.generateFakeGroupsRow, 1000)
  //.then(data => {
    //insert.doMassiveInsert(db, 'events', insert.eventsColumnList, insert.generateFakeEventsRow, 10000)
      //.then(data => {
        //console.log(data);
        //buildIndexes(indexSQL);
      //})
      //.catch(error => {
        //console.log(error);
      //});
    //console.log(data);
  //})
  //.catch(error => {
    //console.log(error);
  //});

const indexSQL = `
  CREATE UNIQUE INDEX eid_idx ON events (eid);
  CREATE INDEX group_id_idx ON events (group_id);
  CREATE UNIQUE INDEX gid_idx ON groups (gid);
`;

//const indexSQL = `
  //CREATE INDEX eid_idx ON events USING hash (eid);
  //CREATE INDEX group_id_idx ON events USING hash (group_id);
  //CREATE INDEX gid_idx ON groups USING hash (gid);
//`;

const buildIndexes = (sql) => {
  db.any(sql, [true])
    .then(r => {
      console.log(r);
    })
    .catch(err => {
      throw err;
    });
};
