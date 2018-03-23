import React from 'react';
import ReactDOM from 'react-dom';
import InfoBox from './components/info_box.jsx';
import ResponseBox from './components/response_box.jsx';
import {Sticky, Grid } from 'semantic-ui-react';
import styles from './styles/app.css';
import get from './helpers/http';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: null
    };
  }
  componentDidMount() {
    get(`/api/header/${this.props.eid}`)
      .then((data) => {
        console.log(data);
        this.setState({
          header: data
        });
      })
      .catch((err) => {
        throw err;
      });
  }
  getHeader() {
    get(`/api/header/${this.props.eid}`)
      .then((data) => {
        console.log(data);
        this.setState({
          header: data
        });
      })
      .catch((err) => {
        throw err;
      });
  }
  render () {
    console.log(this.state.header)
    if (this.state.header === null){
      return null; //Or some other replacement component or markup
    }
    return (
      <Grid stackable={true}>
        <InfoBox data={this.state.header} />
        <ResponseBox numRSVP={this.state.header.yes_rsvp_count} />
      </Grid>
    )
  }
}
window.Header = Header;
//export default Header;
