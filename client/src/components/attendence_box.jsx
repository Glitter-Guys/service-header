import React from 'react';
import ReactDOM from 'react-dom';
import {Divider, Button, Grid } from 'semantic-ui-react';
import styles from '../styles/attendance_box.css';

const AttendanceBox = function(props) {
  return (
  <Grid.Row className={styles.attendanceBox}>
      <div className={styles.attendanceBoxQuestion}> 
        <span className={styles.attendanceBoxText}>Are you going?</span>
        <span className={styles.attendanceBoxNumRSVP}>{props.numRSVP} people going</span>
      </div>
      <div className={styles.attendanceBoxButtons}>
        <Button icon='checkmark' compact={true} color={'teal'} className={styles.attendanceBoxButton}></Button>
        <Button icon='remove' compact={true} color={'teal'} className={styles.attendanceBoxButton}></Button>
      </div>
  </Grid.Row>
  )
};

export default AttendanceBox;