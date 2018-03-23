import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, Button, Grid } from 'semantic-ui-react';
import styles from '../styles/attendance_box.css';

const AttendanceBox = function(props) {
  return (
  <Grid.Row className={styles.attendanceBox}>
      <div className={styles.attendanceBoxQuestion}> 
        <span className={styles.attendanceBoxText}>Are you going?</span>
        <span className={styles.attendanceBoxNumRSVP}>{props.numRSVP} people going</span>
      </div>
      <div className={styles.attendanceBoxButtons}>
        <Modal trigger={<Button icon='checkmark' compact={true} color={'teal'} className={styles.attendanceBoxButton}></Button>}>
          <Modal.Header>Thanks for the RSVP!</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              But first sign up here
            </Modal.Description>
          </Modal.Content>
        </Modal>

        <Modal trigger={<Button icon='remove' compact={true} color={'teal'} className={styles.attendanceBoxButton}></Button>}>
          <Modal.Header>Your response is almost registered</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              Log in here to finish responding
            </Modal.Description>
          </Modal.Content>
        </Modal>
        
      </div>
  </Grid.Row>
  )
};

export default AttendanceBox;