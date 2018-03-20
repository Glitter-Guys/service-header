const createBatch = (id, batchSize, docFunc, idField) => {
  const newBatch = new Array(batchSize);
  for (let i = 0; i < batchSize; i++) {
    let doc = docFunc();
    doc[idField] = id;
    newBatch[i] = {
      insertOne: {
        document: doc
      }
    };
    id++;
  }
  return {newBatch: newBatch, newId: id};
};

const doBulkWrite = (col, count, id, batchSize, docFunc, idField, callback) => {
  const {newBatch, newId} = createBatch(id, batchSize, docFunc, idField);

  col.bulkWrite(newBatch, { bypassDocumentValidation: true })
    .then((r) => {
      if (count > 1) {
        doBulkWrite(col, count - 1, newId, batchSize, docFunc, idField, callback);
      } else {
        callback(null, 'finished');
      }
    })
    .catch(err => {
      callback(err, null);
    });
};

//MongoClient.connect('mongodb://localhost:27017/sdc', (err, database) => {
  //let count = 100;
  //let id = 0;
  //let batchSize = 10000
  //let docFunc = insert.generateFakeGroupsRow;
  //doBulkWrite(database, 'groups', count, id, batchSize, docFunc);
//});

//MongoClient.connect('mongodb://localhost:27017/sdc', (err, database) => {
  //let count = 1000;
  //let id = 0;
  //let batchSize = 10000
  //let docFunc = insert.generateFakeEventsRow;
  //doBulkWrite(database, 'events', count, id, batchSize, docFunc);
//});

module.exports.createBatch = createBatch;
module.exports.doBulkWrite = doBulkWrite;
