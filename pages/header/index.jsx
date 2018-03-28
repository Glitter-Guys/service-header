import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-unfetch'
import 'semantic-ui-css/components/sticky.css'
import 'semantic-ui-css/components/grid.css'
import {Sticky, Grid } from 'semantic-ui-react';
import InfoBox from './components/info_box.jsx';
import ResponseBox from './components/response_box.jsx';
import Head from 'next/head'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps(props) {
    //const res = await fetch(`/api/header/${this.props.eid}`);
    const res = await fetch(`http://localhost:8080/api/header/${props.query.eid}`);
    const data = await res.json();
    return {
      header: data
    };
  }
  render () {
    return (
      <div className="container">
      <Head>
      <link rel='stylesheet' href='/_next/static/style.css' />
      </Head>
      <Grid stackable={true}>
        <InfoBox data={this.props.header} />
        <ResponseBox numRSVP={this.props.header.yes_rsvp_count} />
      </Grid>
      <style jsx global>{`
        .container {
          width:100%;
          height: 100%;
        }

        body {
          color: #2e3e48;
          font-size: 1rem;
          line-height: 1.45;
          font-family: Graphik Meetup, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
        }
        `}</style>
      </div>
    )
  }
}
//window.Header = Header;
export default Header;
