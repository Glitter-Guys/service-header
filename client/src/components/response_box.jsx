import React from 'react';
import ReactDOM from 'react-dom';
import AttendanceBox from './attendence_box.jsx';
import SharingBox from './sharing_box.jsx';

const ResponseBox = function(props) {
  return (
    <div className='response-box'>
        <AttendanceBox />
        <SharingBox />
    </div>
  )
};

export default ResponseBox;