import React from 'react';
import ReactDOM from 'react-dom';
import DateBox from './date_box.jsx';
import DetailsBox from './details_box.jsx';

const InfoBox = function(props) {
  return (
    <div className='info-box'>
        <DateBox localDate={props.data.local_date} localTime={props.data.local_time}/>
        <DetailsBox data={props.data} />
    </div>
  
  )
};

export default InfoBox;