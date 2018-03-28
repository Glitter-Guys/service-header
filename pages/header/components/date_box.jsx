import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/components/container.css'
import 'semantic-ui-css/components/grid.css'
import {Grid, Container} from 'semantic-ui-react';
//import styles from '../styles/date_box.css';

const DateBox = function(props) {
let monthRef = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
let month = monthRef[Number(props.localDate.slice(5,7))];
let day = props.localDate.slice(8,10);

  return (
  <Grid.Column width={3} className="container">
    <div className="dateBox" >
      <Container textAlign='center' className="dateBoxDay">{day}</Container>
      <Container textAlign='center' className="dateBoxMonth">{month}</Container>
    </div>
    <style jsx global>{`
      .dateBox {
        margin:auto;
        text-align: center;
        background: #f6f7f8;
        border: 1px solid rgba(46,62,72,.12);
        border-radius: 8px;
        min-width: 36px;
        min-height: 36px;
        width:54px;
        height: 54px;
        display:flex;
        flex-direction: column;
        justify-content: center;
      }
      .dateBoxDay {
        color:#f13a59;
        font-size:20px;
      }
      .dateBoxMonth {
        font-weight: 500;
        text-transform: uppercase;
        color: rgba(46,62,72,.6);
        font-size: .75rem;
      }
    `}</style>
  </Grid.Column>
  )
};

export default DateBox;
