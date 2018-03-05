import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'semantic-ui-react';

const GroupBox = function(props) {
  return (
  <div className='group-box'>
    <Image rounded={true} className='group-box-img' size='mini'/>
    <span className='group-box-text-container'>
        <div className='group-box-host'>Hosted by {}</div>
        <div className='group-box-group'>From {props.data.group.name}</div>
    </span>
  </div>
  )
};

export default GroupBox;