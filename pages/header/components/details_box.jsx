import React from 'react';
import ReactDOM from 'react-dom';
import GroupBox from './group_box.jsx';
import 'semantic-ui-css/components/grid.css'
import {Grid} from 'semantic-ui-react';
//import styles from '../styles/details_box.css';

const DetailsBox = function(props) {
  var date = new Date(props.data.time);
  var dayRef = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let monthRef = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'];

  return (
  <Grid.Column width={13} className='details-box'>
      <div className="detailsBoxDate">{dayRef[date.getDay()] + ', ' + monthRef[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()}</div>
      <div className="detailsBoxTitle">{props.data.name}</div>
      <GroupBox data={props.data}/>
    <style jsx global>{`
    .detailsBoxDate {
    font-weight: 400;
    stroke: transparent;
    fill: rgba(46,62,72,.6);
    color: rgba(46,62,72,.6);
}

.detailsBoxTitle {
    font-size: 2rem;
    stroke: transparent;
    fill: #2e3e48;
    color: #2e3e48;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 7px;
}
    `}</style>
  </Grid.Column>
  )
};

export default DetailsBox;
