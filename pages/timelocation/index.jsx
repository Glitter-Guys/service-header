import React from 'react';
import fetch from 'isomorphic-unfetch';
import When from './components/when';
import Where from './components/where';
import Map from './components/map';
import Head from "next/head";

class WhereWhen extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps(props) {
    const res = await fetch(
      `http://54.215.245.243:9000/api/event/${props.query.id}`
    );
    const data = await res.json();
    console.log(`Received data for event ID: ${props.query.id}`);
    return {
      whenData: data.whenData,
      whereData: data.whereData,
    };
  }

  render() {
    const p = this.props;
    console.log('This is the event data:', p);
    return <div className='container'>
      <div className="whereWhen">
        <Head>
          <link rel="stylesheet" type="text/css" href="https://www.meetup.com/mu_static/en-US/graphik.c2ab8a6.css" />
        </Head>
        <When whenData={p.whenData} />
        <Where whereData={p.whereData} />
        {p.whereData.venueName && <Map latitude={"37.783684"} longitude={"-122.408986"} whereData={{city:"San Francisco", address1: '944 Market Street', state: 'California'}} />}
        <style jsx>
          {`
            .container {
              margin: 0;
              background-color: #f6f7f8;
              display: flex;
              justify-content: center;
              margin-top: 60px;
            }
            .whereWhen {
              font-family: "Graphik Meetup";
              background-color: #fff;
              border-radius: 8px;
              width: 350px;
              display: flex;
              flex-direction: column;
            }`}
        </style>
      </div>
    </div>
  }
}

export default WhereWhen;
