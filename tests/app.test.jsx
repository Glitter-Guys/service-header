// Link.react.test.js
import React from 'react';
import App from '../client/src/app.jsx';
import renderer from 'react-test-renderer';
import {shallow, render, mount} from 'enzyme';

test('App snapshot is similar to the last', () => {
  const component = renderer.create(
    <App ></App>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

test('App should render response and info box', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('.response-box')).toHaveLength(1);
  expect(wrapper.find('.info-box')).toHaveLength(1);
});

test('App should take in input information and output appropriate visuals', () => {
  const wrapper = mount(<App group={sampleData.group} data={sampleData} />);
  expect(wrapper.find('p').someWhere(n => n.text('DetailsBox'))).toEqual(true);
});

var sampleData = {
  "created": 1502215620000,
  "fee": {
      "accepts": "wepay",
      "amount": 10,
      "currency": "USD",
      "description": "per person",
      "label": "Price",
      "required": true
  },
  "id": "gscrpnyxfbcc",
  "name": "User Testing Night (UX Speed Dating)",
  "rsvp_limit": 30,
  "status": "upcoming",
  "time": 1521681300000,
  "local_date": "2018-03-21",
  "local_time": "18:15",
  "rsvp_open_offset": "PT720H",
  "updated": 1508348987000,
  "utc_offset": -25200000,
  "waitlist_count": 0,
  "yes_rsvp_count": 4,
  "venue": {
      "id": 25131473,
      "name": "Make School",
      "lat": 37.77351379394531,
      "lon": -122.41780853271484,
      "repinned": false,
      "address_1": "1547 Mission Street",
      "city": "San Francisco",
      "country": "us",
      "localized_country_name": "USA",
      "zip": "94103",
      "state": "CA"
  },
  "group": {
      "created": 1397234773000,
      "name": "UX Speed Dating - San Francisco",
      "id": 13858502,
      "join_mode": "open",
      "lat": 37.77000045776367,
      "lon": -122.41000366210938,
      "urlname": "UX-Speed-Dating-San-Francisco",
      "who": "Members",
      "localized_location": "San Francisco, CA",
      "region": "en_US"
  },
  "link": "https://www.meetup.com/UX-Speed-Dating-San-Francisco/events/244317047/",
  "description": "<p><b>Schedule</b></p> <p>6:15pm -- Food/Drinks &amp; Station Setup</p> <p>6:45pm -- Announcements, etc.</p> <p>7:00pm -- User Testing Begins (Promptly)</p> <p>It's formatted like a speed dating event! Test, rotate, test again.</p> <p>8:30pm -- End of Event</p> <p><b>Cost:</b></p> <p>- $10 for each visit</p> <p>- Payment on the event Meetup site before attending (cash on arrival also possible)</p> <p><b>Who:</b></p> <p>- UX designers / project managers / start-up founders</p> <p>- Anyone who wants to have some software/device/concept tested.</p> <p>--- Please do bring along a user to keep the balance of users and testers.</p> <p><b>What:</b></p> <p>UX Speed Dating is a monthly event (third Wednesdays!) where tech professionals get to present a prototype/game/product/website/etc. to three willing testers.</p> <p>It's formatted like a speed dating event with a twist; product owners sit at a station while the users rotate to test a new product every 15 minutes.</p> ",
  "visibility": "public"
}