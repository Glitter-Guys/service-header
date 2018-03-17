const MongoClient = require('mongodb').MongoClient

const doBulkWrite = (db, count, id, batchSize) => {
  //Create chunk
  const col = db.collection('groups');
  const data = new Array(batchSize);
  for (let i = 0; i < batchSize; i++) {
    id += i;
    data[i] = {
      insertOne: {
        document: {
          id: id,
          text: 'hello'
        }
      }
    };
  }

  col.bulkWrite(data)
    .then(function(r) {
      if (count === 0) {
        db.close();
      }
      doBulkWrite(db, count - 1, id + batchSize);
    })
    .catch(error => {
      console.log(error);
    })
};

MongoClient.connect('mongodb://localhost:27017/sdc', function(err, database) {
  // Get the collection
  const db = database.db('sdc');
  let count = 10;
  doBulkWrite(db, count, 0, 1000);
});
