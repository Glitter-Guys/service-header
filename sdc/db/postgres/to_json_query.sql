select row_to_json(data)
from (
  select *,
    ( select row_to_json(groups)
      from groups
      where groups.gid = events.group_id
    ) as group
  from events
  where eid = 1
) data;
