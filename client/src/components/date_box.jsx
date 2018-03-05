import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Container} from 'semantic-ui-react';
import styles from '../styles/date_box.css';

const DateBox = function(props) {
let monthRef = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
let month = monthRef[Number(props.localDate.slice(5,7))];
let day = props.localDate.slice(props.localDate.length - 2, props.localDate.length);

  return (
  <Grid.Column width={3} className={styles.container}>
    <div className={styles.dateBox} >
      <Container textAlign='center' className={styles.dateBoxDay}>{day}</Container>
      <Container textAlign='center' className={styles.dateBoxMonth}>{month}</Container> 
    </div>
  </Grid.Column>
  )
};

export default DateBox;