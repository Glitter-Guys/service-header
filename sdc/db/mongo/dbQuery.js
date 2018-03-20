const resultArrayToObject = (res) => {
  res[0].group = res[0].group[0];
  return res[0];
};

const queryEvent = (col, eventId, callback) => {
  col.aggregate([
    { $match: { eid: eventId}
    },
    { $lookup: {
      from: 'groups',
      localField: 'group_id',
      foreignField: 'gid',
      as: 'group'}
    }
  ], null).toArray((err, res) => {
    if (err) callback(err, null);
    callback(null, resultArrayToObject(res));
  });
};

module.exports.resultArrayToObject = resultArrayToObject;
module.exports.queryEvent = queryEvent;
