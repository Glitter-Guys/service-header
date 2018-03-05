import React from 'react';
import ReactDOM from 'react-dom';
import {Segment, Button, Grid} from 'semantic-ui-react';

const AttendanceBox = function(props) {
  return (
  <Grid.Row className='attendance-box'>
    <Grid>
      <Grid.Row className='attendance-box-question-box'> 
        <span className='attendance-box-text'>Are you going?</span>
        <span className='attendance-box-numRSVP'>{props.numRSVP} people going</span>
      </Grid.Row>
      <Grid.Row className='attendance-box-buttons'>
        <Button className='attendance-box-button-no'>X</Button>
        <Button className='attendance-box-button-yes'>L</Button>
      </Grid.Row>
    </Grid>
  </Grid.Row>
  )
};

export default AttendanceBox;