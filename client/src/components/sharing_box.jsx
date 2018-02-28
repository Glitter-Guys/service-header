import React from 'react';
import ReactDOM from 'react-dom';

const SharingBox = function(props) {
  return (
  <div className='sharing-box'>
      <p>{props.text}</p>
  </div>)
};

export default SharingBox;