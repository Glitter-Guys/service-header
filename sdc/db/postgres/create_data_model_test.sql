DROP TABLE IF EXISTS events_test CASCADE;
DROP TABLE IF EXISTS groups_test CASCADE;

CREATE TABLE groups_test (
    id SERIAL PRIMARY KEY,
    gid SERIAL UNIQUE,
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
    eid SERIAL,
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
    group_id INTEGER REFERENCES groups (gid)
);

-- CREATE SEQUENCE events_id_seq MINVALUE 1 INCREMENT 1 START 1;
-- CREATE SEQUENCE events_eid_seq MINVALUE 1 INCREMENT 1 START 1;


ALTER SEQUENCE groups_test_id_seq MINVALUE 0 RESTART WITH 0;
ALTER SEQUENCE groups_test_gid_seq MINVALUE 0 RESTART WITH 0;
ALTER SEQUENCE events_test_id_seq MINVALUE 0 RESTART WITH 0;
ALTER SEQUENCE events_test_eid_seq MINVALUE 0 RESTART WITH 0;

-- CREATE INDEX on id of both tables and group_id
