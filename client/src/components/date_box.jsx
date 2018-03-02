import React from 'react';
import ReactDOM from 'react-dom';

const DateBox = function(props) {
let monthRef = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
let month = monthRef[Number(props.localDate.slice(5,7))];
let day = props.localDate.slice(props.localDate.length - 2, props.localDate.length);

  return (
  <div className='date-box'>
      <div className='date-box-month'>{month}</div>
      <div className='date-box-day'>{day}</div>
  </div>
  )
};

export default DateBox;