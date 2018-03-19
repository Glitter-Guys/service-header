select row_to_json(data)
from (
  select *,
    ( select row_to_json(groups)
      from groups
      where groups.id = events.group_id
    ) as group
  from events
  where id = 1
) data;
