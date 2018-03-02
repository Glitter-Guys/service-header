import React from 'react';
import ReactDOM from 'react-dom';

const SharingBox = function(props) {
  return (
  <div className='sharing-box'>
      <div className='sharing-box-facebook'>
        <img className='sharing-box-facebook-img' />
        <div className='sharing-box-facebook-text'>Share</div>
      </div>
      <div className='sharing-box-twitter'>
        <img className='sharing-box-twitter-img' />
        <div className='sharing-box-twitter-text'>Tweet</div>
      </div>
  </div>)
};

export default SharingBox;