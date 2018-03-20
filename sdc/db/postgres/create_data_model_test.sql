DROP TABLE IF EXISTS events_test;
DROP TABLE IF EXISTS groups_test;

CREATE TABLE groups_test (
    id SERIAL PRIMARY KEY,
    created INTEGER,
    join_mode TEXT,
    lat FLOAT8,
    lon FLOAT8,
    localized_location TEXT,
    name TEXT,
    img_link TEXT,
    region TEXT,
    urlname TEXT,
    who TEXT
);

CREATE TABLE events_test (
    id SERIAL PRIMARY KEY,
    link TEXT,
    local_date TEXT,
    local_time TEXT,
    name TEXT,
    rsvp_limit INTEGER,
    status TEXT,
    time INTEGER,
    updated INTEGER,
    utc_offset INTEGER,
    visibility TEXT,
    yes_rsvp_count INTEGER,
    group_id INTEGER REFERENCES groups (id)
    -- group_id INTEGER
);

ALTER SEQUENCE groups_test_id_seq MINVALUE 0 RESTART WITH 0;
ALTER SEQUENCE events_test_id_seq MINVALUE 0 RESTART WITH 0;

-- CREATE INDEX on id of both tables and group_id
