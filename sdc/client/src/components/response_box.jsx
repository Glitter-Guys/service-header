import React from 'react';
import ReactDOM from 'react-dom';
import AttendanceBox from './attendence_box.jsx';
import SharingBox from './sharing_box.jsx';
import {Divider, Grid} from 'semantic-ui-react';
import styles from '../styles/response_box.css';

const ResponseBox = function(props) {
  return (
    <Grid.Column width={5} className='response-box'>
      <Grid>
        <AttendanceBox numRSVP={props.numRSVP} />
        <SharingBox />
      </Grid>
    </Grid.Column>
  )
};

export default ResponseBox;