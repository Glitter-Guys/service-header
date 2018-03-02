import React from 'react';
import ReactDOM from 'react-dom';
import GroupBox from './group_box.jsx';

const DetailsBox = function(props) {
  var date = new Date(props.data.time);
  var dayRef = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let monthRef = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'];

  return (
  <div className='details-box'>
      <div className='details-box-date'>{dayRef[date.getDay()] + ', ' + monthRef[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()}</div>
      <div className='details-box-title'>{props.data.name}</div>
      <GroupBox data={props.data}/>
  </div>
  )
};

export default DetailsBox;