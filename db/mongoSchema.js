var eventSchema = { created: Number,
  fee: 
   { accepts: String,
     amount: Number,
     currency: String,
     description: String,
     label: String,
     required: Boolean },
  id: String,
  name: String,
  rsvp_limit: Number,
  status: String,
  time: Number,
  local_date: String,
  local_time: String,
  rsvp_open_offset: String,
  updated: Number,
  utc_offset: Number,
  waitlist_count: Number,
  yes_rsvp_count: Number,
  venue: 
   { 
     name: String,
     lat: Number,
     lon: Number,
     repinned: Boolean,
     address_1: String,
     city: String,
     country: String,
     localized_country_name: String,
     zip: String,
     state: String },
  group: Number,
  link: String,
  description: String,
  visibility: String 
}

var groupSchema = { 
    created: Number,
    name: String,
    id: Number,
    join_mode: String,
    lat: Number,
    lon: Number,
    urlname: String,
    who: String,
    localized_location: String,
    region: String 
}

module.exports.eventSchema = eventSchema;
module.exports.groupSchema = groupSchema;