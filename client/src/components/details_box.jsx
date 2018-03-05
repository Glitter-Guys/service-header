import React from 'react';
import ReactDOM from 'react-dom';
import GroupBox from './group_box.jsx';
import {Grid} from 'semantic-ui-react';

const DetailsBox = function(props) {
  var date = new Date(props.data.time);
  var dayRef = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let monthRef = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'];

  return (
  <Grid.Column width={13} className='details-box'>
      <div className='details-box-date'>{dayRef[date.getDay()] + ', ' + monthRef[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()}</div>
      <div className='details-box-title'>{props.data.name}</div>
      <GroupBox data={props.data}/>
  </Grid.Column>
  )
};

export default DetailsBox;