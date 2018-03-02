import React from 'react';
import ReactDOM from 'react-dom';

const AttendanceBox = function(props) {
  return (
  <div className='attendance-box'>
    <div className='attendance-box-question-box'> 
      <div className='attendance-box-text'>Are you going?</div>
      <div className='attendance-box-numRSVP'>{props.numRSVP} people going</div>
    </div>
    <div className='attendance-box-buttons'>
      <button className='attendance-box-button-no'>X</button>
      <button className='attendance-box-button-yes'>L</button>
    </div>
  </div>
  )
};

export default AttendanceBox;