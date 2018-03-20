const selectToJson = (id) => {
  return (
    `
    select row_to_json(data) as result
    from (
      select *,
        ( select row_to_json(groups)
          from groups
          where groups.id = events.group_id
        ) as group
      from events
      where id = ${id}
    ) data;
    `
  );
};

module.exports.selectToJson = selectToJson;
