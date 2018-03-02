import React from 'react';
import ReactDOM from 'react-dom';

const GroupBox = function(props) {
  return (
  <div className='group-box'>
    <img className='group-box-img' />
    <div className='group-box-text-container'>
        <div className='group-box-host'>Hosted by {}</div>
        <div className='group-box-group'>From {props.data.group.name}</div>
    </div>
  </div>
  )
};

export default GroupBox;