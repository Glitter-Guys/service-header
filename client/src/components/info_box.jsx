import React from 'react';
import ReactDOM from 'react-dom';
import DateBox from './date_box.jsx';
import DetailsBox from './details_box.jsx';

const InfoBox = function(props) {
  return (
    <div className='info-box'>
        <DateBox />
        <DetailsBox />
    </div>
  
  )
};

export default InfoBox;