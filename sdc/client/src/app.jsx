import React from 'react';
import ReactDOM from 'react-dom';
import InfoBox from './components/info_box.jsx';
import ResponseBox from './components/response_box.jsx';
import {Sticky, Grid } from 'semantic-ui-react';
import styles from './styles/app.css';
import { get } from './helpers/http';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {}
    }
  }
  componentDidMount() {
    this.getHeader();
  }
  getHeader() {
    get(`/api/header/${this.props.eid}`)
      .then((data) => {
        this.setState({
          header: data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }
  //sticky items can be configured later
  render () {
    return (
      <Grid stackable={true}>
        <InfoBox data={this.state.header} />
        <ResponseBox numRSVP={this.state.header.data.yes_rsvp_count} />
      </Grid>
    )
  }
}
export default App;
