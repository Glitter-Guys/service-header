require('newrelic');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const dbh = require('../db/postgres/dbHelpers.js');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/public')));

app.get('/api/header/:id', async (req, res) => {
  const id = req.params.id;
  const pool = dbh.pool;
  const sql = dbh.selectToJson(id);
  try {
    const result = await dbh.runQuery(pool, sql);
    res.send(JSON.stringify(result));
  } catch(err) {
    res.status(500);
    res.send('An invalid ID was searched');
  }
});

app.set('port', 8080);

app.listen(app.get('port'), () => {
  console.log('Listening to port ' + app.get('port'));
});
