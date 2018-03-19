const promise = require('bluebird');
const initOptions = {
    promiseLib: promise,
    capSQL: true,
};
const pgp = require('pg-promise')(initOptions);
const fake = require('faker');

const eventsColumnList = [
  'link',
  'local_date',
  'local_time',
  'name',
  'rsvp_limit',
  'status',
  'time',
  'updated',
  'utc_offset',
  'visibility',
  'yes_rsvp_count',
  'group_id'
];

const groupsColumnList = [
  'created',
  'join_mode',
  'lat',
  'lon',
  'localized_location',
  'name',
  'img_link',
  'region',
  'urlname',
  'who'
];

const generateFakeEventsRow = () => {
  return {
    link: fake.internet.url(),
    local_date: fake.date.between('2018-04-30', '2018-01-31'),
    local_time: '19:00',
    name: fake.random.words(),
    rsvp_limit: fake.random.number(),
    status: 'upcoming',
    time: fake.random.number(),
    updated: fake.random.number(),
    utc_offset: -1 * (fake.random.number()),
    visibility: 'public',
    yes_rsvp_count: fake.random.number(),
    group_id: fake.random.number({min:0, max:999999}),
  };
};

const generateFakeGroupsRow = () => {
  const name = fake.random.words();
  return {
    created: fake.random.number(),
    join_mode: 'open',
    lat: fake.address.latitude(),
    lon: fake.address.longitude(),
    localized_location: fake.address.city() + ', ' + fake.address.state(),
    name: name,
    img_link: fake.image.imageUrl(),
    region: 'en_US',
    urlname: name.split(' ').join('-'),
    who: fake.random.word(),
  };
};

const getNextData = (t, pageIndex, rowFunc, batchSize) => {
  let data = null;
  if (pageIndex < 1000) {
    data = new Array(batchSize);
    //data = [];
    for (let i = 0; i < batchSize; i++) {
      data[i] = rowFunc();
    }
  }
  return promise.resolve(data);
};

const doMassiveInsert = (db, table, columnList, rowFunc, batchSize) => {
  return new promise(function(resolve, reject) {
    const cs = new pgp.helpers.ColumnSet(columnList, {table: table});
    db.tx('massive-insert', t => {
      return t.sequence(index => {
        return getNextData(t, index, rowFunc, batchSize)
          .then(data => {
            if (data) {
              const insert = pgp.helpers.insert(data, cs);
              return t.none(insert);
            }
          });
      });
    })
      .then(data => {
        // COMMIT has been executed
        resolve(data);
      })
      .catch(error => {
        // ROLLBACK has been executed
        reject(error);
      });
  });
};

module.exports.doMassiveInsert = doMassiveInsert;
module.exports.getNextData = getNextData;
module.exports.generateFakeGroupsRow = generateFakeGroupsRow;
module.exports.generateFakeEventsRow = generateFakeEventsRow;
module.exports.groupsColumnList = groupsColumnList;
module.exports.eventsColumnList = eventsColumnList;
