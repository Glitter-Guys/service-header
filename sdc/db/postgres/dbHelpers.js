const Pool = require('pg-pool');
const fs = require('fs');
//const stream = fs.createWriteStream('runQuery10k_random_hash_all.csv', { 'flags': 'w' });
//stream.write('overallTime,startTime,endTime\n');

const config = {
  user: 'dmp',
  host: 'localhost',
  port: 5432,
  database: 'sdc',
  idleTimeoutMillis: 5000,
  max: 15,
};

const pool = new Pool(config);

const runQueryWithLog = async (pool, sql, stream) => {
  const client = await pool.connect();
  try {
    const startTime = new Date().getTime();
    const { rows } = await client.query(sql);
    const endTime = new Date().getTime();
    const overallTime = endTime - startTime;
    stream.write(`${overallTime},${startTime},${endTime}\n`);
  } finally {
    client.release();
  }
};

const runQuery = async (pool, sql) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(sql);
    return rows[0].result;
  } finally {
    client.release();
  }
};

const selectToJson = (id) => {
  return (
    `
    select row_to_json(data) as result
    from (
      select *,
        ( select row_to_json(groups)
          from groups
          where groups.gid = events.group_id
        ) as group
      from events
      where eid = ${id}
    ) data;
    `
  );
};

const create10KQuerySample = (pool, order, testName) => {
  const stream = fs.createWriteStream(`${testName}.csv`, { 'flags': 'w' });
  stream.write('overallTime,startTime,endTime\n');
  for (let i = 0; i < 10000; i++) {
    if (order === 'ordered') {
      runQueryWithLog(pool, selectToJson(i), stream);
    } else if (order === 'random') {
      runQueryWithLog(pool, selectToJson(Math.floor(Math.random() * 9999999) + 0 ), stream);
    }
  }
};

//create10KQuerySample(pool, 'random', 'randomTest1');

module.exports.pool = pool;
module.exports.runQuery = runQuery;
module.exports.selectToJson = selectToJson;
